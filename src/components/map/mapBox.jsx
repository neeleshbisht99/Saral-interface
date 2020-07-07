import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import GeolocateController from './mapMenu/geolocateController';
import GeocoderController from './mapMenu/geocoderController';
// import { gatherMarkers } from './mapMarkerLayer/gatherMarkers';
import MapMarkerLayer from './mapMarkerLayer';
import { connect } from 'react-redux';
import $ from 'jquery';
import { FlyToInterpolator } from 'react-map-gl';
import * as d3 from 'd3-ease';
import { TRANSITION_EVENTS } from 'react-map-gl';
import { geocodeAddressToCoordiantes } from './googleGeocoder/index.js';
import PolylineOverlay from './pathBuilder';
import Directions from './pathBuilder/directions';
import Menu from './mapMenu/menu';

import {
  configurePathInitialPoint,
  configurePathFinalPoint,
} from '../../store/actions/pathCoordinates';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmVlbGVzaGJpc2h0IiwiYSI6ImNrODJtdTB6djAxaHkzbW9kMjljMjU0N24ifQ.QrotGUZ6WIwCEYXXH9MlXw';
// const MAPBOX_STYLE = 'mapbox://styles/neeleshbisht/ck82n74a420ge1inu84yfo7f3';
const MAPBOX_STYLE = 'mapbox://styles/mapbox/streets-v11';

function Map(props) {
  const mapRef = useRef(null);
  const sourceRef = useRef(null);
  const directionsRef = useRef();
  const {
    mapViewerInitialState,
    configurePathInitialPoint,
    configurePathFinalPoint,
  } = props;

  const [viewportMarkers, setViewportMarkers] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 26.846643326383706,
    longitude: 80.94626462028312,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    transitionDuration: 1000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: d3.easeCubic,
    transitionInterruption: TRANSITION_EVENTS.BREAK,
  });

  useEffect(() => {
    if (!mapViewerInitialState.recievedLocationFromUser) {
      programmaticGeolocate();
      /* used to configure origin and destination in the redux state  to create a path */
      // configurePathInitialPoint(80.94626462028312, 26.846643326383706);
    } else {
      if (mapViewerInitialState.addressPresent) {
        var address = mapViewerInitialState.address;
        var country = mapViewerInitialState.country;
        let location = address + ', ' + country;
        geocodeAddressToCoordiantes(location)
          .then(result => {
            const { lat, lng } = result;
            const zoom = 16;
            const newViewport = {
              latitude: lat,
              longitude: lng,
              zoom,
            };

            handleViewportChange(newViewport);
            directionsRef.current.setOriginCoordinates([lng, lat]);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        var lat = mapViewerInitialState.latitude;
        var lng = mapViewerInitialState.longitude;
        console.log(lat, lng);

        handleViewportChange({
          latitude: lat,
          longitude: lng,
          zoom: 16,
        });
        directionsRef.current.setOriginCoordinates([lng, lat]);
      }
    }
  }, [mapViewerInitialState.recievedLocationFromUser]);

  /*  useEffect for Lazy loading of markers */
  // useEffect(() => {
  //   if (mapRef) {
  //     const mapInstance = mapRef.current.getMap();
  //     const mapBounds = mapInstance.getBounds();
  //      gatherMarkers(mapBounds._ne, mapBounds._sw, handleViewportMarkersChange);
  //   }
  // }, [viewport]);

  const programmaticGeolocate = () => {
    /*
      trigger() method not exposed , make sure it is exposed then replace the hack with it.
      */
    setTimeout(function () {
      $('.mapboxgl-ctrl-geolocate').click();
      directionsRef.current.setOriginCoordinates([
        80.94626462028312,
        26.846643326383706,
      ]);
    }, 1000);
  };
  const handleViewportMarkersChange = gatheredMarkers => {
    setViewportMarkers(gatheredMarkers);
  };

  const handleViewportChange = newViewport => {
    setViewport({ ...viewport, ...newViewport });
  };

  const mapClickHandler = event => {
    /* ways to find feature */
    // const feature = event.features.find(f => f.layer.id === 'clusters');

    // or
    // const point = [event.center.x, event.center.y];
    // const feature = this.mapRef.queryRenderedFeatures(point, {
    //   layers: ['clusters'],
    // })[0];

    // console.log(event);
    if (event.features.length == 0) {
      return;
    }

    const feature = event.features[0];
    if (feature.layer.id == 'cluster-count' || feature.layer.id == 'clusters') {
      const clusterId = feature.properties.cluster_id;
      const mapboxSource = sourceRef.current.getSource();
      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          return;
        }
        handleViewportChange({
          longitude: feature.geometry.coordinates[0],
          latitude: feature.geometry.coordinates[1],
          zoom,
          transitionDuration: 500,
        });
      });
    } else {
      const coordinates = event.lngLat;
      /*
      
      Zoom to 16 && Display popup

       */
      // console.log(coordinates);
      /* used to configure origin and destination in the redux state  to create a path */
      // configurePathFinalPoint(coordinates[0], coordinates[1]);
      directionsRef.current.setDestinationCoordinates(coordinates);
    }
  };

  return (
    <div className="viewport-almost">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        minZoom={11} // should be 13
        mapStyle={MAPBOX_STYLE}
        ref={mapRef}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={['clusters', 'cluster-count', 'unclustered-point']}
        onClick={mapClickHandler}>
        <GeocoderController
          handleViewportChange={handleViewportChange}
          viewport={viewport}
          mapRef={mapRef}
          directionsRef={directionsRef}
        />
        <Directions
          ref={directionsRef}
          mapRef={mapRef}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />

        <GeolocateController
          directionsRef={directionsRef}
          programmaticGeolocate={programmaticGeolocate}
        />
        <Menu
          directionsRef={directionsRef}
          handleViewportChange={handleViewportChange}
        />
        {/* <MapMarkerLayer markers={viewportMarkers} /> */}
        <MapMarkerLayer sourceRef={sourceRef} />
        {/* <PolylineOverlay /> */}
      </ReactMapGL>
    </div>
  );
}

export default connect(
  store => ({
    mapViewerInitialState: store.mapViewerInitialState,
  }),
  { configurePathInitialPoint, configurePathFinalPoint },
)(Map);

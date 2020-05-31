import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import GeolocateController from './mapMenu/geolocateController';
import GeocoderController from './mapMenu/geocoderController';
import { gatherMarkers } from './mapMarkerLayer/gatherMarkers';
import MapMarkerLayer from './mapMarkerLayer';
import { connect } from 'react-redux';
import $ from 'jquery';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmVlbGVzaGJpc2h0IiwiYSI6ImNrODJtdTB6djAxaHkzbW9kMjljMjU0N24ifQ.QrotGUZ6WIwCEYXXH9MlXw';
const MAPBOX_STYLE = 'mapbox://styles/neeleshbisht/ck82n74a420ge1inu84yfo7f3';

function Map(props) {
  const mapRef = useRef(null);
  const { mapViewerInitialState } = props;

  const [viewportMarkers, setViewportMarkers] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 20.4,
    longitude: 30.8,
    zoom: 1.45,
    bearing: 0,
    pitch: 0,
  });
  var clickEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: false,
  });
  useEffect(() => {
    if (!mapViewerInitialState.recievedLocationFromUser) {
      /*
       

      trigger() method not exposed , make sure it is exposed then replace the hack with it.

      */
      setTimeout(function () {
        $('.mapboxgl-ctrl-geolocate').click();
      }, 5000);
    } else {
      if (mapViewerInitialState.addressPresent) {
        var address = mapViewerInitialState.address;
        var country = mapViewerInitialState.country;
        /*
        
        
        do geocoding
        
        */
      } else {
        var lat = mapViewerInitialState.latitude;
        var lng = mapViewerInitialState.longitude;
        handleViewportChange({
          latitude: lat,
          longitude: lng,
          zoom: 5,
        });
      }
    }
  }, [mapViewerInitialState.recievedLocationFromUser]);

  useEffect(() => {
    if (mapRef) {
      const mapInstance = mapRef.current.getMap();
      const mapBounds = mapInstance.getBounds();
      gatherMarkers(mapBounds._ne, mapBounds._sw, handleViewportMarkersChange);
    }
  }, [viewport]);

  const handleViewportMarkersChange = gatheredMarkers => {
    setViewportMarkers(gatheredMarkers);
  };

  const handleViewportChange = newViewport => {
    setViewport({ ...viewport, ...newViewport });
  };

  return (
    <div className="viewport-almost">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={MAPBOX_STYLE}
        ref={mapRef}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}>
        <GeocoderController
          handleViewportChange={handleViewportChange}
          viewport={viewport}
          mapRef={mapRef}
        />
        <GeolocateController />
        {/* <MapMarkerLayer markers={viewportMarkers} /> */}
      </ReactMapGL>
    </div>
  );
}

export default connect(
  store => ({
    mapViewerInitialState: store.mapViewerInitialState,
  }),
  {},
)(Map);

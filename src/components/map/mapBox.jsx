import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import GeolocateController from '../mapMenu/geolocateController/geolocateController';
import GeocoderController from '../mapMenu/geocoderController/geocoderController';
import { gatherMarkers } from './mapMarkerLayer/gatherMarkers';
import MapMarkerLayer from './mapMarkerLayer';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmVlbGVzaGJpc2h0IiwiYSI6ImNrODJtdTB6djAxaHkzbW9kMjljMjU0N24ifQ.QrotGUZ6WIwCEYXXH9MlXw';
const MAPBOX_STYLE = 'mapbox://styles/neeleshbisht/ck82n74a420ge1inu84yfo7f3';

function Map(props) {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState({
    latitude: 1,
    longitude: 1,
    zoom: 4,
    bearing: 0,
    pitch: 0,
  });

  const [viewportMarkers, setViewportMarkers] = useState([]);

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
        <MapMarkerLayer markers={viewportMarkers} />
      </ReactMapGL>
    </div>
  );
}

export default Map;

import React, { useState, useEffect } from 'react';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Geocoder from 'react-map-gl-geocoder';
import { Marker } from 'react-map-gl';
// import Icon from '@mapbox/mr-ui/icon';
// import Button from '@mapbox/mr-ui/button';
// import MapGL, {GeolocateControl} from 'react-map-gl';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmVlbGVzaGJpc2h0IiwiYSI6ImNrODJtdTB6djAxaHkzbW9kMjljMjU0N24ifQ.QrotGUZ6WIwCEYXXH9MlXw';
const searchResultsCount = 10;

function GeocoderController(props) {
  // const userLocationStatement='';
  // function findShopsNearMe()
  // {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //        userLocationStatement = "Geolocation is not supported by this browser.";
  //     }
  // }

  // function showPosition(position) {
  //   console.log(position.coords.latitude,position.coords.longitude);
  //     props.getUserCoordinates(position.coords);
  // }

  const [GeocoderResultLocation, setGeocoderResultLocation] = useState({
    latitude: props.viewport.latitude,
    longitude: props.viewport.longitude,
    zoom: props.viewport.zoom,
  });

  const [
    geocoderResultLocationMarker,
    setGeocoderResultLocationMarker,
  ] = useState(false);

  const handleGeocoderViewportChange = newViewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    props.handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  };

  const userSelectedGeocoderResult = result => {
    console.log(result.result);
    setGeocoderResultLocation({
      ...GeocoderResultLocation,
      latitude: result.result.center[1],
      longitude: result.result.center[0],
    });
    setGeocoderResultLocationMarker(true);
    // console.log(viewport);
  };

  return (
    <React.Fragment>
      <Geocoder
        mapRef={props.mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        limit={searchResultsCount}
        onResult={userSelectedGeocoderResult}
      />

      {geocoderResultLocationMarker && (
        <Marker
          latitude={GeocoderResultLocation.latitude}
          longitude={GeocoderResultLocation.longitude}
          offsetLeft={-20}
          offsetTop={-10}>
          <div>
            {/* <img src={geocoderResultMarker}/> */}
            <img src="https://img.icons8.com/nolan/64/marker.png" />
          </div>
        </Marker>
      )}
    </React.Fragment>
  );
}
export default GeocoderController;

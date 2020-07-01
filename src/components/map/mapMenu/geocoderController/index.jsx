import React, { useState, useEffect } from 'react';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Geocoder from 'react-map-gl-geocoder';
import { Marker } from 'react-map-gl';
// import Icon from '@mapbox/mr-ui/icon';
// import Button from '@mapbox/mr-ui/button';
// import MapGL, {GeolocateControl} from 'react-map-gl';

import { geocodeAddressToCoordiantes } from '../../googleGeocoder/index.js';
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmVlbGVzaGJpc2h0IiwiYSI6ImNrODJtdTB6djAxaHkzbW9kMjljMjU0N24ifQ.QrotGUZ6WIwCEYXXH9MlXw';
const searchResultsCount = 0;

function GeocoderController(props) {
  const { mapRef, directionsRef, viewport, handleViewportChange } = props;

  const handleGeocoderViewportChange = newViewport => {
    const zoom = 13;
    handleViewportChange({
      ...newViewport,
      zoom,
    });
  };

  const userSelectedGeocoderResult = result => {
    console.log('insider find user location');
    const location = result.result.place_name;
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
  };

  const feature = {
    type: 'Feature',
    properties: {
      title: 'Input location',
      description: "A large park in Chicago's Austin neighborhood",
    },
    geometry: {
      coordinates: [20.5937, 78.9629],
      type: 'Point',
    },
  };

  function forwardGeocoder(query) {
    console.log(query);
    var matchingFeatures = [];
    feature['place_name'] = query;
    feature['center'] = feature.geometry.coordinates;
    feature['place_type'] = ['park'];
    matchingFeatures.push(feature);
    return matchingFeatures;
  }

  function errorOccured() {
    console.log('inside error');
  }
  return (
    <React.Fragment>
      <Geocoder
        mapRef={mapRef}
        // onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        limit={searchResultsCount}
        onResult={userSelectedGeocoderResult}
        localGeocoder={forwardGeocoder}
      />
    </React.Fragment>
  );
}
export default GeocoderController;

/* 


check onViewportChange for smooth viewport change
check react-map-gl-geocoder's index.js line 243
problem may be in the updated viewport,
with passing function to onViewportChange, even then the viewport changes,

Default value is good, check example of geocoder on mapbox website for viewport change

check param flyTo

*/

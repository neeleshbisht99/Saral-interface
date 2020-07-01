import React from 'react';
import { GeolocateControl } from 'react-map-gl';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import './index.css';
function GeolocateController(props) {
  const { directionsRef, programmaticGeolocate } = props;

  function onGeolocate(positionOptions) {
    console.log(' user geolocated ');
    console.log(positionOptions);
    var lng = positionOptions.coords.longitude + 0.000000001;
    var lat = positionOptions.coords.latitude + 0.000000001;
    directionsRef.current.setOriginCoordinates([lng, lat]);
  }

  function handleGeolocateButtonClick() {
    programmaticGeolocate();
  }
  return (
    <React.Fragment>
      <Button
        className="findNearMeButtonInsideMap"
        variant="appPrimary"
        onClick={handleGeolocateButtonClick}
        size="medium"
        // color="#273d56"
        passthroughProps={{
          'aria-label': 'Find Near Me',
          style: { top: '13px', right: '253px', position: 'absolute' },
        }}>
        <IconText iconBefore="arrive">Near Me</IconText>
      </Button>
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        className="none absolute mt12 ml12 z1"
        label="Geolocate"
        onGeolocate={onGeolocate}
      />
    </React.Fragment>
  );
}
export default GeolocateController;

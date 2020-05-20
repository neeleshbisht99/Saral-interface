import React from 'react';
import { GeolocateControl } from 'react-map-gl';

const geolocateStyle = {
  // position: 'fixed',
  // top: 200,
  // left: 30,
  // margin: 10
};

function GeolocateController() {
  function onGeolocate(positionOptions) {
    console.log(' user geolocated ');
    //  console.log(positionOptions);
  }
  return (
    <React.Fragment>
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        // style={geolocateStyle}
        className="absolute mt12 ml12 z1"
        // onGeolocate={onGeolocate}
      />
    </React.Fragment>
  );
}
export default GeolocateController;

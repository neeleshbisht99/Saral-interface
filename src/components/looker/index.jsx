import React from 'react';
import Map from '../map/mapBox';
import Appbar from '../appbar/appbar';

// import Map from '../map/googleMap';
// const GOOGLE_MAP_URL ="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYBjH5tZWtI7yNeI95JmBRwuDtDKfCf9Y&v=3.exp&libraries=geometry,drawing,places";
{
  /* <Map
      googleMapURL={GOOGLE_MAP_URL}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      /> */
}
function Looker() {
  const [userCoordinates, setUserCoordinates] = React.useState({
    longitude: '-122.8',
    latitude: '37.4',
  });

  function getUserCoordinates(coords) {
    console.log('okk got the coordinates');
    setUserCoordinates({
      longitude: coords.longitude,
      latitutde: coords.latitude,
    });
  }

  return (
    <React.Fragment>
      <div className="classHome viewport-full">
        <Appbar />
        {/* <div className="col col--2 ">
              <div className="mt12">
              <Menu getUserCoordinates={getUserCoordinates}/>
              </div>
           </div> */}
        <div className="h-auto w-full mt6 ">
          <Map focusCoordinates={userCoordinates} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Looker;

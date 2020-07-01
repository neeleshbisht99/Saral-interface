import React, { useState, useEffect } from 'react';
import Instructor from './instructionController';
import './index.css';
import Note from '@mapbox/dr-ui/note';
function Menu(props) {
  const { directionsRef, handleViewportChange } = props;
  const [mapboxMenuState, setMapboxMenuState] = useState(false);
  const configureMapboxMenuState = () => {
    setMapboxMenuState(!mapboxMenuState);
  };
  const handleExampleClick = () => {
    var lng = 80.94626462028312;
    var lat = 26.846643326383706;
    handleViewportChange({
      latitude: lat,
      longitude: lng,
      zoom: 16,
    });
    directionsRef.current.setOriginCoordinates([lng, lat]);
  };
  return (
    <React.Fragment>
      <div className="mapbox-menu-container">
        <Instructor />
        <button className="example-trial" onClick={handleExampleClick}>
          See an example here
        </button>
        <Note>
          <p>
            A refers to Origin
            <br />B refers to Destn.
          </p>
        </Note>
      </div>
    </React.Fragment>
  );
}

export default Menu;

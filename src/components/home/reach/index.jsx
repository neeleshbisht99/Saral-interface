import React from 'react';
import CardFront from './cardFront';
import CardBack from './cardBack';
import './index.css';
function Reach() {
  return (
    <React.Fragment>
      <div className="reachContainer">
        <div className="reachContainerBody">
          <CardFront />
          <CardBack />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Reach;

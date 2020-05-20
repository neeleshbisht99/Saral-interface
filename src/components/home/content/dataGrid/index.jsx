import React from 'react';
import RightPath from './rightPath';
import CountCompare from './countCompare';
import Share from './share';
import './index.css';

function DataGrid() {
  return (
    <React.Fragment>
      <div className="rightPath">
        <RightPath />
      </div>

      <div className="countCompare">
        <CountCompare />
      </div>
      <div className="share">
        <Share />
      </div>
    </React.Fragment>
  );
}
export default DataGrid;

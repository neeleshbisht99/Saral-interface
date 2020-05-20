import React from 'react';
import Finder from './finder';
import DataGrid from './dataGrid';
import './index.css';
function Content() {
  return (
    <React.Fragment>
      <div className="mainContentContainer ">
        <div className="contentFinder  ">
          <Finder />
        </div>
        <div className="dataGrid">
          <DataGrid />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Content;

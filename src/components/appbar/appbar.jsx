import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import newIcon from '../../img/newIcon.svg';
function Appbar() {
  return (
    <React.Fragment>
      <div className=" home border-b border--gray-light mx60 pt6">
        <div className="grid grid--gut12">
          <div className="col col--4 flex-parent flex-parent--center-main">
            <div className=" w120 flex-child ">
              <div className="w-full h-full flex-parent flex-parent--center-main">
                <img src={newIcon} className="flex-child " />
              </div>
            </div>
          </div>
          <div className="col col--8">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Appbar;

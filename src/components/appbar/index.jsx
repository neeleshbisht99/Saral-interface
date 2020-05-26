import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { configureAddLocationModalBool } from '../../store/actions';
import logo from '../../img/logo.svg';
import './index.css';

function Appbar(props) {
  const { configureAddLocationModalBool } = props;

  const [active, setActive] = useState('Home');
  const changeTab = id => {
    setActive(id);
  };

  return (
    <React.Fragment>
      <div className="appbarContainer ">
        {/* navigation menu */}
        <div className="main-nav ">
          <div className="nav-tab">
            <a href="#" className="nav-links">
              Home
            </a>
          </div>

          <div className="nav-tab">
            <a href="#" className="nav-links">
              Product
            </a>
          </div>

          <div className="nav-tab">
            <a href="#" className="nav-links">
              Contact
            </a>
          </div>

          <div className="nav-tab">
            <a href="#" className="nav-links">
              Blog
            </a>
          </div>

          <div className="nav-tab add-location-badge">
            {/* <a href="#" className="nav-links"> */}
            <button
              className="btn btn--stroke btn--white "
              onClick={() => {
                configureAddLocationModalBool(true);
              }}
              passthroughProps={{ 'aria-label': 'Primary' }}>
              Add location
            </button>
            {/* </a> */}
          </div>
        </div>

        <div className="nav-header">
          <a href="#" className="nav-title">
            <img src={logo} />
          </a>
        </div>
        {/* toogle button */}
        <div className="nav-toggle-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="9px"
            viewBox="0 0 24 9"
            version="1.1">
            <title>menu-transparent</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd">
              <g id="menu-transparent" fill="#FFFFFF" fill-rule="nonzero">
                <rect
                  id="Rectangle-9"
                  x="0"
                  y="0"
                  width="24"
                  height="2"
                  rx="1"
                />
                <rect
                  id="Rectangle-9-Copy-2"
                  x="0"
                  y="7"
                  width="24"
                  height="2"
                  rx="1"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect(store => ({}), { configureAddLocationModalBool })(
  Appbar,
);

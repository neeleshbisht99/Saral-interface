import React from 'react';
// import logo from '../../../../img/logo.svg';
import './index.css';
import { connect } from 'react-redux';
import { configureAddLocationModalBool } from '../../../../store/actions';
import Button from '@mapbox/mr-ui/button';

function Navbar(props) {
  const { configureAddLocationModalBool } = props;

  return (
    <React.Fragment>
      <div className="navContainer">
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

          {/* <div className="nav-tab">
            <a href="#" className="nav-links">
              Blog
            </a>
          </div> */}

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
            <img src="https://www.dropbox.com/s/k46pilwenemt5sj/logo.svg?raw=1" />
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
  Navbar,
);

// Navbar - button

{
  /* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="9px" viewBox="0 0 24 9" version="1.1">
    <!-- Generator: Sketch 56.2 (81672) - https://sketch.com -->
    <title>menu-transparent</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="menu-transparent" fill="#FFFFFF" fill-rule="nonzero">
            <rect id="Rectangle-9" x="0" y="0" width="24" height="2" rx="1"/>
            <rect id="Rectangle-9-Copy-2" x="0" y="7" width="24" height="2" rx="1"/>
        </g>
    </g>
</svg> */
}

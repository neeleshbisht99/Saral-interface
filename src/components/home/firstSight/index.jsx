import React from 'react';
import './index.css';
// import pollutionVideo from '../../../videos/used/home-new.webm';
import Navbar from './navbar';
import Content from './content';

function FirstSight(props) {
  return (
    <React.Fragment>
      <div className="mainContainer">
        <video
          autoPlay
          muted
          loop
          style={{
            // position: 'fixed',
            width: '100%',
            left: 0,
            top: 0,
          }}>
          <source
            src="https://www.dropbox.com/s/ph7h2or1khxfnct/home-new.webm?raw=1"
            type="video/webm"
          />
        </video>
        <div className="overlay"></div>
        <div className="home-content">
          <Content />
        </div>
        <div className="home-navbar">
          <Navbar />
        </div>
      </div>
    </React.Fragment>
  );
}
export default FirstSight;

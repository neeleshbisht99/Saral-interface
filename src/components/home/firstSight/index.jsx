import React from 'react';
import './index.css';
import pollutionVideo from '../../../videos/output.webm';
import Navbar from './navbar';
import Content from './content';

function FirstSight(props) {
  return (
    <React.Fragment>
      <div className="mainContainer">
        <div className="home-content">
          <Content />
        </div>
        <div className="overlay"></div>
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
          {/* <source src={pollutionVideo} type="video/webm" /> */}
        </video>
        <div className="home-navbar">
          <Navbar />
        </div>
      </div>
    </React.Fragment>
  );
}
export default FirstSight;

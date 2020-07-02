import React from 'react';
import './index.css';
// import rightPathVideo from '../../../../../videos/used/rightPath.webm';
import Icon from '@mapbox/mr-ui/icon';

function RightPath() {
  const handleChange = (value, id) => {};

  return (
    <React.Fragment>
      <div className="rightPathContainer">
        <div className="rightPathGridWrapper">
          <div className="rightPathContentContainer">
            <h2 className="heading">Know the right path ?</h2>
            <p className="paragraph">
              Our live updating map data helps people to find a nearest
              crash-bin and do their part in the mission #CleanEarth.
              <br></br>
              We are single-mindedly focussed to make earth clean & bring back
              human values.
              <br />
              <br />
              <span className="inline-block color-blue">
                <a href="#">
                  Get the right Path <Icon name="arrow-right" inline={true} />
                </a>
              </span>{' '}
            </p>
          </div>
          <div className="rightPathVideoContainer">
            <video
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                left: 0,
                top: 0,
              }}>
              <source
                src="https://www.dropbox.com/s/9uk0s7grz40bjqq/rightPath.webm?raw=1"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightPath;

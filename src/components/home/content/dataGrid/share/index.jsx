import React from 'react';
import './index.css';
import shareVideo from '../../../../../videos/knowshare.webm';
import Icon from '@mapbox/mr-ui/icon';

function RightPath() {
  const handleChange = (value, id) => {};

  return (
    <React.Fragment>
      <div className="shareContainer">
        <div className="shareGridWrapper">
          <div className="shareContentContainer">
            <h2 className="heading">Know more. Then share.</h2>
            <p className="paragraph">
              Now you can add new locations and reviews in no time. Everytime
              you add a new authentic location or a review, you did a
              significant karma that matters.
              <br />
              <br />
              <span className="inline-block color-blue">
                <a href="#">
                  Add new locations <Icon name="arrow-right" inline={true} />
                </a>
              </span>{' '}
            </p>
          </div>
          <div className="shareVideoContainer">
            <video
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                left: 0,
                top: 0,
              }}>
              {/* <source src={shareVideo} type="video/webm" /> */}
            </video>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightPath;

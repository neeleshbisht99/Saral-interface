import React from 'react';
import './index.css';
import countCompareVideo from '../../../../../videos/countCompare.webm';
import Icon from '@mapbox/mr-ui/icon';

function RightPath() {
  const handleChange = (value, id) => {};

  return (
    <React.Fragment>
      <div className="countCompareContainer">
        <div className="countCompareGridWrapper">
          <div className="countCompareVideoContainer">
            <video
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                left: 0,
                top: 0,
              }}>
              {/* <source src={countCompareVideo} type="video/webm" /> */}
            </video>
          </div>
          <div className="countCompareContentContainer">
            <h2 className="heading">We Count. You Compare.</h2>
            <p className="paragraph">
              Every karma counts, so do we. Continously track your contributions
              and see how you compare to your friends. Earn badges and points.
              <br />
              <br />
              <span className="inline-block color-blue">
                <a href="#">
                  Attain more badges <Icon name="arrow-right" inline={true} />
                </a>
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightPath;

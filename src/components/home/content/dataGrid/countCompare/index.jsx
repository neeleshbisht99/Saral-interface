import React from 'react';
import './index.css';

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
              {/* <source src={finderVideo} type="video/webm" /> */}
            </video>
          </div>
          <div className="countCompareContentContainer">
            <h2 className="heading">We Count. You Compare.</h2>
            <p className="paragraph">
              Every karma counts, so do we. Continously track your contributions
              and see how you compare to your friends. Earn badges and points.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightPath;

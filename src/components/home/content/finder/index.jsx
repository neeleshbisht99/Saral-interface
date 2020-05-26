import React from 'react';
import IconText from '@mapbox/mr-ui/icon-text';
import ControlText from '@mapbox/mr-ui/control-text';
import Button from '@mapbox/mr-ui/button';
import './index.css';
import finderVideo from '../../../../videos/finder.webm';

function Finder() {
  const handleChange = (value, id) => {};

  return (
    <React.Fragment>
      <div className="finderContainer">
        <div className="hashtag">#EveryInchIsHome</div>
        <div className="finderGridWrapper">
          <div className="finderVideoContainer">
            <div className="b">
              <video
                autoPlay
                muted
                loop
                style={{
                  width: '100%',
                  left: 0,
                  top: 0,
                }}>
                <source src={finderVideo} type="video/webm" />
              </video>
            </div>
          </div>
          <div class="finderContentContainer">
            <div className="finderNearMe">
              <Button
                onClick={() => {}}
                outline={false}
                width="full"
                passthroughProps={{
                  width: '100%',
                  'align-content': 'center',
                  'text-align': 'center',
                }}>
                <IconText iconBefore="globe">Find Near Me</IconText>
              </Button>
            </div>
            <div className="horizontal-line"></div>
            <div className="finderAddress">
              <div className="address">
                <ControlText
                  id="basic"
                  onChange={handleChange}
                  label="Address"
                />
              </div>
              <div className="address">
                <ControlText
                  id="basic"
                  onChange={handleChange}
                  label="Country"
                />
              </div>
              <div className="horizontal-line-or">
                <div className="line-wrapper line-wrapper-left">
                  <div className="line"></div>
                </div>
                <div className="or">or</div>
                <div className="line-wrapper line-wrapper-right">
                  <div className="line"></div>
                </div>
              </div>
              <div className="coordinates">
                <div className="langitude">
                  <ControlText
                    id="basic"
                    onChange={handleChange}
                    label="Latitude"
                  />
                </div>
                <div className="latitude">
                  <ControlText
                    id="basic"
                    onChange={handleChange}
                    label="Longitude"
                  />
                </div>
              </div>
            </div>
            <div className="submitFinder">
              <Button onClick={() => {}} outline={true} width="full">
                <IconText iconAfter="arrow-right">Start Mapping</IconText>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Finder;

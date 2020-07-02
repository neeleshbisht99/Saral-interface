import React, { useState } from 'react';
import IconText from '@mapbox/mr-ui/icon-text';
import Icon from '@mapbox/mr-ui/icon';
import ControlText from '@mapbox/mr-ui/control-text';
import Button from '@mapbox/mr-ui/button';
import './index.css';
// import finderVideo from '../../../../videos/used/finder.webm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { configureMapViewerInitialState } from '../../../../store/actions';

function Finder(props) {
  const [findLocationData, setFindLocationData] = useState({
    lng: '',
    lat: '',
    country: '',
    address: '',
  });

  const { configureMapViewerInitialState } = props;

  const handleChange = (value, id) => {
    setFindLocationData({ ...findLocationData, [id]: value });
  };

  function handleLocationFinderSubmit() {
    // console.log(findLocationData);
    configureMapViewerInitialState(findLocationData);
    props.history.push('/mapViewer');
  }

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
                <source
                  src="https://www.dropbox.com/s/lirwd7t00jcgvi3/finder.webm?raw=1"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
          <div className="finderContentContainer">
            <div className="finderNearMe">
              <Button
                onClick={handleLocationFinderSubmit}
                outline={false}
                width="full"
                passthroughProps={{
                  width: '100%',
                  'align-content': 'center',
                  'text-align': 'center',
                }}>
                <span className="inline-block color-white">
                  <Icon name="arrive" inline={true} /> Find Near Me
                </span>{' '}
              </Button>
            </div>
            <div className="horizontal-line"></div>
            <div className="finderAddress">
              <div className="address">
                <ControlText
                  id="address"
                  onChange={handleChange}
                  label="Address"
                  value={findLocationData.address}
                />
              </div>
              <div className="address">
                <ControlText
                  id="country"
                  onChange={handleChange}
                  label="Country"
                  value={findLocationData.country}
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
                    id="lat"
                    onChange={handleChange}
                    label="Latitude"
                    value={findLocationData.lat}
                  />
                </div>
                <div className="latitude">
                  <ControlText
                    id="lng"
                    onChange={handleChange}
                    label="Longitude"
                    value={findLocationData.lng}
                  />
                </div>
              </div>
            </div>
            <div className="submitFinder">
              <Button
                onClick={handleLocationFinderSubmit}
                outline={true}
                width="full">
                <span className="inline-block color-blue">
                  Start Mapping
                  <Icon name="arrow-right" inline={true} />
                </span>{' '}
                {/* <IconText iconAfter="arrow-right">Start Mapping</IconText> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(store => ({}), { configureMapViewerInitialState })(
  withRouter(Finder),
);

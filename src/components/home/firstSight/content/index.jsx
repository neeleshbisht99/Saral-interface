import React from 'react';
import './index.css';
import Button from '@mapbox/mr-ui/button';
import { withRouter } from 'react-router-dom';

function Content(props) {
  function handleLocationFinderSubmit() {
    props.history.push('/mapViewer');
  }

  return (
    <React.Fragment>
      <div className="contentContainer">
        <div className="contentMain">
          <div className="head">Community home to change makers </div>
          <div className="followUp">
            Revealing the basic values of human, to server & live together{' '}
            <br />
            Joining hands to create a better future
          </div>
          <div className="mappingButton">
            <Button
              onClick={handleLocationFinderSubmit}
              passthroughProps={{ 'aria-label': 'Primary' }}
              size="large"
              width="large">
              Let's make it !
            </Button>
            <Button
              passthroughProps={{ 'aria-label': 'Primary' }}
              size="large"
              width="large">
              Spread it out !
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default withRouter(Content);

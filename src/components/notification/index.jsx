import React from 'react';
import ControlAlert from '@mapbox/mr-ui/control-alert';
import { connect } from 'react-redux';
import { configureAddLocationFormSubmit } from '../../store/actions';
import './index.css';

function Notification(props) {
  const { alertOpen, status, theme } = props.addLocationFormSubmitStatus;
  const { configureAddLocationFormSubmit } = props;
  function toggleAlert() {
    configureAddLocationFormSubmit({}, false);
  }
  return (
    <React.Fragment>
      <div className="notificationContainer">
        {alertOpen ? (
          <div className="animation-fade-in animation--speed-1 txt-s">
            <ControlAlert onButtonClick={toggleAlert} theme={theme}>
              <p className="mx6">{status}</p>
            </ControlAlert>
          </div>
        ) : (
          ''
        )}
      </div>
    </React.Fragment>
  );
}

export default connect(
  store => ({
    addLocationFormSubmitStatus: store.addLocationFormSubmitStatus,
  }),
  { configureAddLocationFormSubmit },
)(Notification);

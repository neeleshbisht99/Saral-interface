import React, { useState } from 'react';
import Modal from '@mapbox/mr-ui/modal';
import ControlText from '@mapbox/mr-ui/control-text';
import ControlSelect from '@mapbox/mr-ui/control-select';
import ControlSwitch from '@mapbox/mr-ui/control-switch';
import ControlFile from '@mapbox/mr-ui/control-file';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import './index.css';
import { connect } from 'react-redux';
import {
  configureAddLocationModalBool,
  configureAddLocationFormSubmit,
} from '../../store/actions';

function AddLocation(props) {
  const {
    addLocationBool,
    configureAddLocationModalBool,
    configureAddLocationFormSubmit,
  } = props;

  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    landmark: '',
    city: '',
    state: '',
    country: '',
    latitude: '',
    longitude: '',
    images: [],
  });

  const handleChange = (value, id) => {
    // console.log(value, id);
    setFormValues({ ...formValues, [id]: value });
  };

  function handleAddLocationFormSubmit() {
    configureAddLocationFormSubmit(formValues);
    closeModal();
  }

  function openModal() {
    configureAddLocationModalBool(true);
  }
  function closeModal() {
    configureAddLocationModalBool(false);
  }
  return (
    <React.Fragment>
      {addLocationBool.modalOpen ? (
        <div className="modalContainer">
          <Modal
            size="auto"
            padding="none"
            accessibleTitle="Animals"
            onExit={closeModal}
            getApplicationNode={() => (document.getElementById('root'))}
          >
            <div className="prose-add-location-modal">
              {/* <div className="add-location-head"> */}
              <p>Add new location</p>
              {/* </div> */}
              <div className="main-content-add-location-modal">
                <div className="add-location-name">
                  <ControlText
                    id="name"
                    label="Name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="add-location-address">
                  <div className="add-location-address">
                    <ControlText
                      id="address"
                      label="Address"
                      optional={true}
                      noAuto={true}
                      value={formValues.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="add-location-landmark">
                    <ControlText
                      id="landmark"
                      label="Landmark"
                      optional={true}
                      noAuto={true}
                      value={formValues.landmark}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="add-location-address2">
                  <div className="add-location-city">
                    <ControlText
                      id="city"
                      label="City"
                      optional={true}
                      noAuto={true}
                      value={formValues.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="add-location-state">
                    <ControlText
                      id="state"
                      label="State"
                      optional={true}
                      noAuto={true}
                      value={formValues.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="add-location-country">
                    <ControlSelect
                      id="country"
                      label="Country"
                      themeControlSelect="w-full"
                      themeControlSelectContainer="w-full"
                      value={formValues.country}
                      onChange={
                        (/* value, id */) => {
                          /* console.log(value, id); */
                        }
                      }
                      options={[
                        {
                          label: 'India',
                          value: 'india',
                        },
                        {
                          label: 'Other',
                          value: 'other',
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="add-location-coordinates">
                  <div className="location">
                    <ControlSwitch
                      id="active-liev-location"
                      value={true}
                      label="Get live location"
                      themeControlSwitch="switch--l mt24"
                      themeLabel=" ml12 txt-bold mt24 txt-l inline-block"
                      onChange={
                        (/* value, id */) => {
                          /* console.log(value, id); */
                        }
                      }
                    />
                  </div>
                  <div className="lat">
                    <ControlText
                      id="latitude"
                      label="Latitude"
                      value={formValues.latitude}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="lng">
                    <ControlText
                      id="longitude"
                      label="Longitude"
                      value={formValues.longitude}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="pictures">
                  <ControlFile
                    id="name"
                    label="Add images"
                    optional={true}
                    // noAuto={true}
                    disabled={true}
                    onChange={
                      (/* value, id */) => {
                        /* console.log(value, id); */
                      }
                    }
                  />
                </div>
                <div className="add-location-button">
                  <Button
                    onClick={handleAddLocationFormSubmit}
                    // size="medium"
                    width="large"
                    outline={true}
                    // color="#273d56"
                    passthroughProps={{ 'aria-label': 'Save your map' }}>
                    <IconText iconBefore="floppy">Add to map</IconText>
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
          ''
        )}
    </React.Fragment>
  );
}

export default connect(
  store => ({
    addLocationBool: store.addLocationBool,
  }),
  { configureAddLocationModalBool, configureAddLocationFormSubmit },
)(AddLocation);

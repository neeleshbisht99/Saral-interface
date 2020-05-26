import {
  SET_ADD_LOCATION_BOOL,
  SET_ADD_LOCATION_FORM_SUBMIT_STATUS,
} from '../actionTypes';
import { addError, removeError } from './error';
import API from '../../services/api';

export const setAddLocationBool = addLocationBool => ({
  type: SET_ADD_LOCATION_BOOL,
  addLocationBool,
});

export const setAddLocationFormSubmitStatus = (
  addLocationStatus,
  alertOpen,
  theme,
) => ({
  type: SET_ADD_LOCATION_FORM_SUBMIT_STATUS,
  addLocationStatus,
  alertOpen,
  theme,
});

export const configureAddLocationModalBool = val => {
  return async dispatch => {
    try {
      dispatch(setAddLocationBool(val));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export const configureAddLocationFormSubmit = (data, alertOpen) => {
  if (!alertOpen) {
    return dispatch => {
      dispatch(setAddLocationFormSubmitStatus('', alertOpen));
    };
  }
  return async dispatch => {
    try {
      const addLocationStatus = await API.call('post', `addLocation`, data);
      console.log(addLocationStatus);
      if (addLocationStatus.status == 201) {
        dispatch(
          setAddLocationFormSubmitStatus(
            'Location uploaded sucessfully !',
            alertOpen,
            'success',
          ),
        );
      } else {
        dispatch(
          setAddLocationFormSubmitStatus(
            'Location upload failed. Please try again !',
            alertOpen,
            'error',
          ),
        );
      }

      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

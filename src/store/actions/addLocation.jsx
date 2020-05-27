import { SET_ADD_LOCATION_BOOL } from '../actionTypes';
import { addError, removeError } from './error';
import { setFormSubmitStatus } from './notification';
import API from '../../services/api';

export const setAddLocationBool = addLocationBool => ({
  type: SET_ADD_LOCATION_BOOL,
  addLocationBool,
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

export const configureAddLocationFormSubmit = data => {
  return async dispatch => {
    try {
      const addLocationStatus = await API.call('post', `addLocation`, data);
      console.log(addLocationStatus);
      if (addLocationStatus.status == 201) {
        dispatch(
          setFormSubmitStatus(
            'Location uploaded sucessfully !',
            true,
            'success',
          ),
        );
      } else {
        dispatch(
          setFormSubmitStatus(
            'Location upload failed. Please try again !',
            true,
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

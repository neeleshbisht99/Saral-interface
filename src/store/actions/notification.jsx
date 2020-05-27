import { SET_FORM_SUBMIT_STATUS } from '../actionTypes';
import { addError, removeError } from './error';

export const setFormSubmitStatus = (status, alertOpen, theme) => ({
  type: SET_FORM_SUBMIT_STATUS,
  status,
  alertOpen,
  theme,
});

export const closeNotificationAlert = () => {
  return async dispatch => {
    try {
      dispatch(setFormSubmitStatus('', false, 'success'));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

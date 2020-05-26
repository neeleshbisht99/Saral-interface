import {
  SET_ADD_LOCATION_BOOL,
  SET_ADD_LOCATION_FORM_SUBMIT_STATUS,
} from '../actionTypes';

export const addLocationBool = (state = { modalOpen: false }, action) => {
  switch (action.type) {
    case SET_ADD_LOCATION_BOOL:
      return { modalOpen: action.addLocationBool };
    default:
      return state;
  }
};
export const addLocationFormSubmitStatus = (
  state = { alertOpen: false, status: '', theme: 'success' },
  action,
) => {
  switch (action.type) {
    case SET_ADD_LOCATION_FORM_SUBMIT_STATUS:
      return {
        alertOpen: action.alertOpen,
        status: action.addLocationStatus,
        theme: action.theme,
      };
    default:
      return state;
  }
};

import { SET_FORM_SUBMIT_STATUS } from '../actionTypes';

export const formSubmitStatus = (
  state = { alertOpen: false, status: '', theme: 'success' },
  action,
) => {
  switch (action.type) {
    case SET_FORM_SUBMIT_STATUS:
      return {
        alertOpen: action.alertOpen,
        status: action.status,
        theme: action.theme,
      };
    default:
      return state;
  }
};

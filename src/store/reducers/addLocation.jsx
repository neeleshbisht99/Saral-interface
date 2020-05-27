import { SET_ADD_LOCATION_BOOL } from '../actionTypes';

export const addLocationBool = (state = { modalOpen: false }, action) => {
  switch (action.type) {
    case SET_ADD_LOCATION_BOOL:
      return { modalOpen: action.addLocationBool };
    default:
      return state;
  }
};

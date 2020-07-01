import { SET_MAP_INITIAL_POINT, SET_MAP_FINAL_POINT } from '../actionTypes';

export const pathCoordinates = (state = {}, action) => {
  switch (action.type) {
    case SET_MAP_INITIAL_POINT:
      return { ...state, initialPoint: action.payload };
    case SET_MAP_FINAL_POINT:
      return { ...state, finalPoint: action.payload };
    default:
      return state;
  }
};

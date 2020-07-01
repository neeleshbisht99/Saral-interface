import { SET_MAP_FINAL_POINT, SET_MAP_INITIAL_POINT } from '../actionTypes';
import { addError, removeError } from './error';

export const setPathCoordinatesInitialPoint = (lng, lat) => ({
  type: SET_MAP_INITIAL_POINT,
  payload: [lng, lat],
});

export const setPathCoordinatesFinalPoint = (lng, lat) => ({
  type: SET_MAP_FINAL_POINT,
  payload: [lng, lat],
});

export const configurePathInitialPoint = (longitude, latitude) => {
  return dispatch => {
    try {
      dispatch(setPathCoordinatesInitialPoint(longitude, latitude));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};
export const configurePathFinalPoint = (longitude, latitude) => {
  return dispatch => {
    try {
      dispatch(setPathCoordinatesFinalPoint(longitude, latitude));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

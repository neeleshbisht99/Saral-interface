import {
  SET_MAP_VIEWER_ADDRESS_INITIAL_STATE,
  SET_MAP_VIEWER_COORDINATES_INITIAL_STATE,
  SET_MAP_VIEWER_NEAR_ME_INITIAL_STATE,
} from '../actionTypes';
import { addError, removeError } from './error';

export const setMapViewerAddressInitialState = (address, country) => ({
  type: SET_MAP_VIEWER_ADDRESS_INITIAL_STATE,
  address,
  country,
});

export const setMapViewerCoordinatesInitialState = (lng, lat) => ({
  type: SET_MAP_VIEWER_COORDINATES_INITIAL_STATE,
  lng,
  lat,
});

export const setMapViewerNearMeInitialState = () => ({
  type: SET_MAP_VIEWER_NEAR_ME_INITIAL_STATE,
});

export const configureMapViewerInitialState = findLocationData => {
  const { lng, lat, address, country } = findLocationData;

  if (lng.length != 0 && lat.length != 0) {
    console.log('coordinates filled by user');
    var longitude = parseFloat(lng);
    var latitude = parseFloat(lat);
    return dispatch => {
      try {
        dispatch(setMapViewerCoordinatesInitialState(longitude, latitude));
        dispatch(removeError());
      } catch (err) {
        const { error } = err.response.data;
        dispatch(addError(error));
      }
    };
  } else if (address.length != 0) {
    address = address + ' ' + country;
    console.log('address filled by user');
    return dispatch => {
      try {
        dispatch(setMapViewerAddressInitialState(address, country));
        dispatch(removeError());
      } catch (err) {
        const { error } = err.response.data;
        dispatch(addError(error));
      }
    };
  }
  return dispatch => {
    // const error = {
    //   status: 502,
    //   message: 'Insufficient information provided',
    // };
    // dispatch(addError(error));
    try {
      dispatch(setMapViewerNearMeInitialState());
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

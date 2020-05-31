import {
  SET_MAP_VIEWER_ADDRESS_INITIAL_STATE,
  SET_MAP_VIEWER_COORDINATES_INITIAL_STATE,
} from '../actionTypes';

export const mapViewerInitialState = (
  state = { recievedLocationFromUser: false },
  action,
) => {
  switch (action.type) {
    case SET_MAP_VIEWER_ADDRESS_INITIAL_STATE:
      return {
        recievedLocationFromUser: true,
        addressPresent: true,
        address: action.address,
        country: action.country,
        coordinatesPresent: false,
      };
    case SET_MAP_VIEWER_COORDINATES_INITIAL_STATE:
      return {
        recievedLocationFromUser: true,
        addressPresent: false,
        coordinatesPresent: true,
        longitude: action.lng,
        latitude: action.lat,
      };
    default:
      return state;
  }
};

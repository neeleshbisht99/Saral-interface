import { combineReducers } from 'redux';

import error from './error';
import { addLocationBool } from './addLocation';
import { formSubmitStatus } from './notification';
import { mapViewerInitialState } from './mapViewerInitialState';
import { pathCoordinates } from './pathCoordinates';

export default combineReducers({
  error,
  addLocationBool,
  formSubmitStatus,
  mapViewerInitialState,
  pathCoordinates,
});

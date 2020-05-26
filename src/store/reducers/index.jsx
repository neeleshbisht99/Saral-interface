import { combineReducers } from 'redux';

import error from './error';
import { addLocationBool, addLocationFormSubmitStatus } from './addLocation';

export default combineReducers({
  error,
  addLocationBool,
  addLocationFormSubmitStatus,
});

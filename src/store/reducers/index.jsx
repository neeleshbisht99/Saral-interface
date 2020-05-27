import { combineReducers } from 'redux';

import error from './error';
import { addLocationBool } from './addLocation';
import { formSubmitStatus } from './notification';

export default combineReducers({
  error,
  addLocationBool,
  formSubmitStatus,
});

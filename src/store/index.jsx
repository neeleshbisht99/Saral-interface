import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const DEFAULT_STATE = {
  addLocationBool: { modalOpen: false },
  error: { message: null },
  formSubmitStatus: {
    alertOpen: false,
    status: '',
    theme: 'success',
  },
  mapViewerInitialState: {
    recievedLocationFromUser: false,
    addressPresent: false,
    coordinatesPresent: false,
  },
  pathCoordinates: {
    initialPoint: [],
    finalPoint: [],
  },
};

export const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

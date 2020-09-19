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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

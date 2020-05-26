import React from 'react';
import RouteViews from './RouteViews';
import { Provider } from 'react-redux';
import { store } from '../store';
import AddLocation from '../components/addLocation';
import Notification from '../components/notification';
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <RouteViews />
        <AddLocation />
        <Notification />
      </Provider>
    </React.Fragment>
  );
}
export default App;

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MapPage from '../pages/MapPage';

const RouteViews = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/map" render={() => <MapPage />} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default RouteViews;

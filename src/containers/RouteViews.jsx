import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MapPage from '../pages/MapPage';

const RouteViews = () => (
  <React.Fragment>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/mapviewer" render={() => <MapPage />} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default RouteViews;

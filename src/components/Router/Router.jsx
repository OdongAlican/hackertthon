import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Authentication/Login/Login';

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;

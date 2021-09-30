import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Signup from '../Authentication/Signup/Signup';
import PasswordForget from '../Authentication/PasswordForget/PasswordForget';
import PasswordReset from '../Authentication/PasswordReset/PasswordReset';

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgetpassword" component={PasswordForget} />
        <Route exact path="/forgetreset/:token" component={PasswordReset} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;

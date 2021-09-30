import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Signup from '../Authentication/Signup/Signup';
import PasswordForget from '../Authentication/PasswordForget/PasswordForget';
import PasswordReset from '../Authentication/PasswordReset/PasswordReset';
import Dashboard from '../Dashboard/Dashboard';

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgetpassword" component={PasswordForget} />
        <Route path="/forgetreset/:token" component={PasswordReset} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;

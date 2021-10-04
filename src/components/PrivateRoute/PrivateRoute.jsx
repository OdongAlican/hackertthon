/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authentication, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!authentication.authenticated) {
        return <Redirect to="/" />;
      }
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => ({
  authentication: state.authentication,
});

PrivateRoute.propTypes = {
  authentication: PropTypes.shape({
    authenticated: PropTypes.bool,
  }).isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);

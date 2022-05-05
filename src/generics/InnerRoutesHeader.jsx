/* eslint-disable  react/prop-types */

import React from 'react';
import { NavLink } from 'react-router-dom';

const InnerRoutesHeader = ({ url }) => (
  <div className="inner-nest-routes-header">
    <NavLink exact activeClassName="current-navlink" to={`${url}`}>RECIEVED</NavLink>
    <NavLink exact activeClassName="current-navlink" to={`${url}/pending`}>PENDING</NavLink>
    <NavLink exact activeClassName="current-navlink" to={`${url}/failed`}>FAILED</NavLink>
  </div>
);

export default InnerRoutesHeader;

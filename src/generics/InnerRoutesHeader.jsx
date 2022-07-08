/* eslint-disable  react/prop-types */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { determineTitle } from '../utils/helpers';

import ModalComponent from './Modal';
import CreateProduct from '../components/Dashboard/SubRoutes/Sales/CreateProduct';

const InnerRoutesHeader = ({ url }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalComponent show={showModal} showFxn={setShowModal} title={determineTitle(url)}>
        <CreateProduct />
      </ModalComponent>
      <div className="d-flex align-items-center mt-2 py-2" style={{ borderBottom: '1px solid #eaeaea', fontSize: '13px' }}>
        <NavLink exact activeClassName="current-navlink" style={{ textDecoration: 'none', marginRight: '20px' }} to={`${url}`}>RECIEVED</NavLink>
        <NavLink exact activeClassName="current-navlink" style={{ textDecoration: 'none', marginRight: '20px' }} to={`${url}/pending`}>PENDING</NavLink>
        <NavLink exact activeClassName="current-navlink" style={{ textDecoration: 'none', marginRight: '20px' }} to={`${url}/failed`}>FAILED</NavLink>
      </div>
    </>
  );
};

export default InnerRoutesHeader;

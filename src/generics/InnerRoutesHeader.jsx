/* eslint-disable  react/prop-types */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { determineTitle } from '../utils/helpers';

import Button from './Button';
import ModalComponent from './Modal';

const InnerRoutesHeader = ({ url }) => {
  const [showModal, setShowModal] = useState(false);
  const createNew = () => setShowModal(true);

  return (
    <>
      <ModalComponent show={showModal} showFxn={setShowModal} title={determineTitle(url)} />
      <div className="d-flex align-items-center mt-2 py-2" style={{ borderBottom: '1px solid #eaeaea', fontSize: '13px' }}>
        <NavLink exact activeClassName="current-navlink" style={{ textDecoration: 'none', marginRight: '20px' }} to={`${url}`}>RECIEVED</NavLink>
        <NavLink exact activeClassName="current-navlink" style={{ textDecoration: 'none', marginRight: '20px' }} to={`${url}/pending`}>PENDING</NavLink>
        <NavLink exact activeClassName="current-navlink" style={{ textDecoration: 'none', marginRight: '20px' }} to={`${url}/failed`}>FAILED</NavLink>
        <div className="ml-auto row" style={{ marginLeft: 'auto' }}>
          <div className="col-md-8">
            <input type="text" placeholder="Filter product by name" className="form-control shadow-sm" />
          </div>
          <div className="col-md-4">
            <Button buttonName="+ New" clickButton={createNew} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerRoutesHeader;

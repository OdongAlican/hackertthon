/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable  react/prop-types */

import React from 'react';

const ScreenModal = ({
  icon, header, textOne, textTwo, closeModal, email,
}) => (
  <div className="full-screen-modal-section">
    <div className="inner-full-screen-modal-section">
      <i onClick={closeModal} className="far fa-times-circle" />
      <div className="full-screen-modal-section-icon">
        <i className={icon} />
      </div>
      <div className="reset-link-header-section">
        {header}
      </div>
      <div className="reset-link-content-section">
        {textOne}
        {' '}
        {email && <span>{email}</span>}
        <br />
        {textTwo}
      </div>
    </div>
  </div>
);

export default ScreenModal;

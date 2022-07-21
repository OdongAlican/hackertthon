/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React from 'react';

const Button = ({
  buttonName, buttonSize, clickButton, RequestButton,
  RequestButtonAccepted, cancel,
}) => (
  <button
    type="button"
    onClick={clickButton}
    className={
        RequestButton ? (
          'btn btn-primary main-page-blue'
        )
          : cancel ? (
            'btn btn-secondary w-100'
          ) : RequestButtonAccepted ? (
            'btn btn-success'
          ) : (
            buttonSize === 'small' ? 'btn btn-primary main-page-blue w-50'
              : buttonSize === 'medium' ? 'btn btn-primary main-page-blue w-75'
                : 'btn btn-primary main-page-blue w-100'
          )
      }
  >
    {buttonName}
  </button>
);

export default Button;

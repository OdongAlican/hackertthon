/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React from 'react';

const Button = ({
  buttonName, buttonSize, clickButton, RequestButton,
  RequestButtonAccepted, cancel,
}) => (
  <button
    type="button"
    style={{ minWidth: '100px' }}
    onClick={clickButton}
    className={
      RequestButton ? ('btn btn-primary')
        : cancel ? ('btn btn-secondary')
          : RequestButtonAccepted ? ('btn btn-success')
            : (buttonSize === 'small' ? 'btn btn-primary w-50'
              : buttonSize === 'medium' ? 'btn btn-primary w-75'
                : 'btn btn-primary w-100'
            )
    }
  >
    {buttonName}
  </button>
);

export default Button;

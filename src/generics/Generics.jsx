/* eslint-disable  react/prop-types */
/* eslint-disable  no-nested-ternary */

import React from 'react';
import './index.css';

export const Input = ({
  inputSize, inputName, changeValue, inputType,
}) => (
  <input
    onChange={changeValue}
    type={inputType}
    name={inputName}
    className={
    inputSize === 'small' ? 'small-input-section'
      : inputSize === 'medium' ? 'medium-input-section'
        : 'large-input-section'
    }
  />
);
export const Button = ({ buttonName, buttonSize, clickButton }) => (
  <button
    type="button"
    onClick={clickButton}
    className={
    buttonSize === 'small' ? 'small-button-section'
      : buttonSize === 'medium' ? 'medium-button-section'
        : 'large-button-section'
    }
  >
    {buttonName}
  </button>
);

export const AuthCard = ({ children }) => (
  <div className="inner-form-section">
    {children}
  </div>
);

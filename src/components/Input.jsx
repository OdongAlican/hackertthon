/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { ErrorSection } from './Generics';

export const Input = ({
  inputSize, inputName, changeValue, inputType, label, placeholder, errors, value,
}) => (
  <div>
    <div>
      <label className="fw-bold mb-1" htmlFor={inputName}>{label}</label>
    </div>
    <input
      onChange={changeValue}
      placeholder={placeholder}
      value={value}
      type={inputType}
      name={inputName}
      className={`${inputSize === 'small' ? 'w-50' : inputSize === 'medium' ? 'w-75' : 'w-100'} form-control`}
    />
    <div className="mt-1">{errors && <ErrorSection message={errors} />}</div>
  </div>
);

export const PasswordInput = ({
  inputName, changeValue, label, placeholder, togglePassword, passwordState, inputSize = '', errors,
}) => (
  <div>
    <div>
      <label className="fw-bold mb-1" htmlFor={inputName}>{label}</label>
    </div>
    <div
      className={`input-group ${inputSize === 'small' ? 'w-50' : inputSize === 'medium' ? 'w-75' : 'w-100'}`}
    >
      <input
        type={passwordState}
        onChange={changeValue}
        className="form-control"
        placeholder={placeholder}
        name={inputName}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <span className="input-group-text" id="basic-addon1">
        {
            passwordState === 'password'
              ? (<i className="fas fa-eye-slash" style={{ cursor: 'pointer' }} onClick={togglePassword} />)
              : (<i className="fas fa-eye" style={{ cursor: 'pointer' }} onClick={togglePassword} />)
        }
      </span>
    </div>
    <div className="mt-1">{errors && <ErrorSection message={errors} />}</div>
  </div>
);

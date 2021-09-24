import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetPasswordConstants } from '../../../constants/index';
import Display from '../Display/Display';
import {
  AuthCard, Input, ErrorSection, Button,
} from '../../../generics/Generics';

const PasswordReset = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitNewInformation = () => console.log('component');
  console.log(setErrors);
  return (
    <div data-testid="forgetReset" className="main-login-section">
      <div className="welcome-section">
        <AuthCard
          pageMainHeader={resetPasswordConstants.pageMainHeader}
          pageMiniHeader={resetPasswordConstants.pageMiniHeader}
          pageExtraHeading={resetPasswordConstants.pageExtraHeading}
        >
          <div className="login-email-section mt-3">Email Adress</div>
          <div className="login-email-input">
            <Input
              inputName="newpasswordemail"
              inputType="text"
              changeValue={handleChange}
            />
            { errors.newpasswordemail && <ErrorSection message={errors.newpasswordemail} />}
          </div>
          <div className="login-email-section mt-3">Email Adress</div>
          <div className="login-email-input">
            <Input
              inputName="newpasswordemail"
              inputType="text"
              changeValue={handleChange}
            />
            { errors.newpasswordemail && <ErrorSection message={errors.newpasswordemail} />}
          </div>
          <div className="login-button-section mt-4">
            <Button
              buttonName="Send Reset Link"
              clickButton={submitNewInformation}
            />
          </div>
          <div className="horizontal-or-section mt-3">
            {' '}
            <span>OR</span>
          </div>
          <Link to="/signup" className="go-back-links mt-3">
            Go to sign up
          </Link>
          <Link to="/" className="go-back-links mt-2">
            Go to Log in
          </Link>
        </AuthCard>
      </div>
      <div className="display-logo-section">
        <Display />
      </div>
    </div>
  );
};

export default PasswordReset;

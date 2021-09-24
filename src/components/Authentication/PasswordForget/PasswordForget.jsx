import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../../actions';
import { forgetPasswordConstants } from '../../../constants/index';
import { newPasswordValidator } from '../../../constants/validators';
import {
  AuthCard, Input, Button, ErrorSection,
} from '../../../generics/Generics';
import Display from '../Display/Display';

const initialState = { newpasswordemail: '' };

const PasswordForget = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitNewPassword = () => setErrors(newPasswordValidator(values));

  useEffect(() => {
    dispatch(forgotPassword(values));
  }, [errors]);
  return (
    <div data-testid="forgetPassword" className="main-login-section">
      <div className="welcome-section">
        <AuthCard
          pageMainHeader={forgetPasswordConstants.pageMainHeader}
          pageMiniHeader={forgetPasswordConstants.pageMiniHeader}
          pageExtraHeading={forgetPasswordConstants.pageExtraHeading}
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
          <div className="login-button-section mt-4">
            <Button
              buttonName="Send Reset Link"
              clickButton={submitNewPassword}
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

export default PasswordForget;

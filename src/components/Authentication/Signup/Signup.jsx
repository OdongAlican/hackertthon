/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Display from '../Display/Display';
import {
  AuthCard, Input, Button, ErrorSection,
} from '../../../generics/Generics';
import { signupConstants } from '../../../constants/index';
import { authValidator } from '../../../constants/validators';
import { signUp } from '../../../actions';

const initialState = {
  first_name: '',
  last_name: '',
  userEmail: '',
  password: '',
  confirm_password: '',
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [passwordState, setPasswordState] = useState('password');
  const [confirmPasswordState, setConfirmPasswordState] = useState('password');
  const dispatch = useDispatch();

  const togglePassword = value => {
    if (value === 'password') {
      if (passwordState === 'password') {
        setPasswordState('text');
      } else {
        setPasswordState('password');
      }
    }
    if (value === 'confirm_password') {
      if (confirmPasswordState === 'password') {
        setConfirmPasswordState('text');
      } else {
        setConfirmPasswordState('password');
      }
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitSignUp = () => setErrors(authValidator(values, 'signup'));

  useEffect(() => {
    const errorArray = Object.keys(errors);
    if (errorArray.length === 1 && errorArray.includes('state')) {
      dispatch(signUp(values));
    }
  }, [errors]);

  return (
    <div className="main-signup-section">
      <div className="welcome-section">
        <AuthCard
          pageMainHeader={signupConstants.pageMainHeader}
          pageMiniHeader={signupConstants.pageMiniHeader}
          pageExtraHeading={signupConstants.pageExtraHeading}
        >
          <div className="first-name-second-name-section mt-3">
            <div className="sign-up-first-name">
              <div className="sign-up-first-name-label">First Name</div>
              <div className="sign-up-first-name-input">
                <Input
                  inputSize="small"
                  inputName="first_name"
                  inputType="text"
                  changeValue={handleChange}
                />
                { errors.first_name && <ErrorSection message={errors.first_name} />}
              </div>
            </div>
            <div className="sign-up-second-name">
              <div className="sign-up-second-name-label">Last Name</div>
              <div className="sign-up-second-name-input">
                <Input
                  inputSize="small"
                  inputName="last_name"
                  inputType="text"
                  changeValue={handleChange}
                />
                { errors.last_name && <ErrorSection message={errors.last_name} />}
              </div>
            </div>
          </div>
          <div className="login-email-section mt-3">Email Adress</div>
          <div className="login-email-input">
            <Input
              inputName="userEmail"
              inputType="text"
              changeValue={handleChange}
            />
            { errors.userEmail && <ErrorSection message={errors.userEmail} />}
          </div>
          <div className="login-password-section mt-3">Password</div>
          <div className="login-password-input mb-3">
            <Input
              inputName="password"
              changeValue={handleChange}
              inputType={passwordState}
            />
            {
              passwordState === 'password'
                ? (<i className="fas fa-eye-slash" onClick={() => togglePassword('password')} />)
                : (<i className="fas fa-eye" onClick={() => togglePassword('password')} />)
            }
            { errors.password && <ErrorSection message={errors.password} />}
          </div>
          <div className="login-password-section mt-3">Confirm Password</div>
          <div className="login-password-input mb-3">
            <Input
              inputName="confirm_password"
              changeValue={handleChange}
              inputType={confirmPasswordState}
            />
            {
              confirmPasswordState === 'password'
                ? (<i className="fas fa-eye-slash" onClick={() => togglePassword('confirm_password')} />)
                : (<i className="fas fa-eye" onClick={() => togglePassword('confirm_password')} />)
            }
            { errors.confirm_password && <ErrorSection message={errors.confirm_password} />}
          </div>
          <div className="login-button-section mt-4">
            <Button
              buttonName="Sign Up"
              clickButton={submitSignUp}
            />
          </div>
          <div className="dont-have-account">
            Don&#39;t have an account ?
            {' '}
            <Link style={{ color: '#2A57D3' }} to="/">Log In Here</Link>
          </div>
        </AuthCard>
      </div>
      <div className="display-logo-section">
        <Display />
      </div>

    </div>
  );
};

export default Signup;

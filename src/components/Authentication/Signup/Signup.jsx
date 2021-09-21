/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Display from '../Display/Display';
import {
  AuthCard, Input, Button, ErrorSection,
} from '../../../generics/Generics';
import { signupConstants } from '../../../constants/index';
import { authValidator } from '../../../constants/validators';

const initialState = {
  firstname: '',
  lastname: '',
  signupemail: '',
  signuppassword: '',
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [passwordState, setPasswordState] = useState('password');

  const togglePassword = () => {
    if (passwordState === 'password') {
      setPasswordState('text');
    } else {
      setPasswordState('password');
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
                  inputName="firstname"
                  inputType="text"
                  changeValue={handleChange}
                />
                { errors.firstname && <ErrorSection message={errors.firstname} />}
              </div>
            </div>
            <div className="sign-up-second-name">
              <div className="sign-up-second-name-label">Last Name</div>
              <div className="sign-up-second-name-input">
                <Input
                  inputSize="small"
                  inputName="lastname"
                  inputType="text"
                  changeValue={handleChange}
                />
                { errors.lastname && <ErrorSection message={errors.lastname} />}
              </div>
            </div>
          </div>
          <div className="login-email-section mt-3">Email Adress</div>
          <div className="login-email-input">
            <Input
              inputName="signupemail"
              inputType="text"
              changeValue={handleChange}
            />
            { errors.signupemail && <ErrorSection message={errors.signupemail} />}
          </div>
          <div className="login-password-section mt-3">Password</div>
          <div className="login-password-input mb-3">
            <Input
              inputName="signuppassword"
              changeValue={handleChange}
              inputType={passwordState}
            />
            {
              passwordState === 'password'
                ? (<i className="fas fa-eye-slash" onClick={togglePassword} />)
                : (<i className="fas fa-eye" onClick={togglePassword} />)
            }
            { errors.signuppassword && <ErrorSection message={errors.signuppassword} />}
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

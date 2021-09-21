/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import Display from '../Display/Display';
import '../index.css';
import { AuthCard, Input, Button } from '../../../generics/Generics';

const Login = () => {
  const [passwordState, setPasswordState] = useState('password');
  const pageMainHeader = 'Welcome back to';
  const pageExtraHeading = 'For19';
  const pageMiniHeader = `
    Login with your accurate 
    information to access your account
  `;

  const togglePassword = () => {
    if (passwordState === 'password') {
      setPasswordState('text');
    } else {
      setPasswordState('password');
    }
  };
  return (
    <div className="main-login-section">
      <div className="welcome-section">
        <AuthCard
          pageMainHeader={pageMainHeader}
          pageMiniHeader={pageMiniHeader}
          pageExtraHeading={pageExtraHeading}
        >
          <div className="login-email-section mt-4">Email Adress</div>
          <div className="login-email-input">
            <Input
              inputName="loginemailinput"
              inputType="text"
            />
          </div>
          <div className="login-password-section mt-4">Password</div>
          <div className="login-password-input">
            <Input
              inputName="loginpasswordinput"
              inputType={passwordState}
            />
            {
              passwordState === 'password'
                ? (<i className="fas fa-eye-slash" onClick={togglePassword} />)
                : (<i className="fas fa-eye" onClick={togglePassword} />)
            }
          </div>
          <div className="login-forgot-password-section">
            Forgotten your password
          </div>
          <div className="login-button-section mt-4">
            <Button
              buttonName="Log In"
            />
          </div>
        </AuthCard>
      </div>
      <div className="display-logo-section">
        <Display />
      </div>
    </div>
  );
};

export default Login;

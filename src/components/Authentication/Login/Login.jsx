/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../index.css';
import Display from '../Display/Display';
import {
  AuthCard, Input, Button, ErrorSection,
} from '../../../generics/Generics';
import { authValidator } from '../../../constants/validators';
import { signIn } from '../../../actions';
import { loginConstants } from '../../../constants/index';

const initialState = {
  userEmail: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [passwordState, setPasswordState] = useState('password');
  const history = useHistory();

  const togglePassword = () => {
    if (passwordState === 'password') {
      setPasswordState('text');
    } else {
      setPasswordState('password');
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitLogin = () => setErrors(authValidator(values, 'signin'));

  useEffect(() => {
    const errorArray = Object.keys(errors);
    if (errorArray.length === 1 && errorArray.includes('state')) {
      dispatch(signIn(values, history));
    }
  }, [errors]);

  return (
    <div data-testid="appLogin" className="main-login-section">
      <div className="welcome-section">
        <AuthCard
          pageMainHeader={loginConstants.pageMainHeader}
          pageMiniHeader={loginConstants.pageMiniHeader}
          pageExtraHeading={loginConstants.pageExtraHeading}
        >
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
                ? (<i className="fas fa-eye-slash" onClick={togglePassword} />)
                : (<i className="fas fa-eye" onClick={togglePassword} />)
            }
            { errors.password && <ErrorSection message={errors.password} />}
          </div>
          <Link to="/forgetpassword" className="login-forgot-password-section">
            Forgotten your password
          </Link>
          <div className="login-button-section mt-3">
            <Button
              buttonName="Log In"
              clickButton={submitLogin}
            />
          </div>
          <div className="dont-have-account">
            Don&#39;t have an account ?
            {' '}
            <Link style={{ color: '#2A57D3' }} to="/signup">Sign Up Here</Link>
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

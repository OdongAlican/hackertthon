/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordConstants, passwordResetModal } from '../../../constants/index';
import Display from '../Display/Display';
import { AuthCard, ErrorSection, ScreenModal } from '../../../generics/Generics';
import { Input } from '../../../generics/Input';
import { fetchResetToken, resetPassword } from '../../../actions';
import { authValidator } from '../../../constants/validators';
import Button from '../../../generics/Button';

const initialState = {
  password: '',
  confirm_password: '',
};

const PasswordReset = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { token } = useParams();
  const [passwordState, setPasswordState] = useState('password');
  const [confirmPasswordState, setConfirmPasswordState] = useState('password');
  const [displayModal, setDisplayModal] = useState(false);
  const dispatch = useDispatch();

  const authState = useSelector(state => state.authentication);
  const closeModal = () => setDisplayModal(false);

  useEffect(() => {
    dispatch(fetchResetToken(token));
  }, []);

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

  useEffect(() => {
    if (Object.keys(authState.passwordMessage).length > 0) {
      setDisplayModal(true);
    }
  }, [authState.passwordMessage]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitNewInformation = () => setErrors(authValidator(values, 'reset'));

  useEffect(() => {
    const errorArray = Object.keys(errors);
    if (errorArray.length === 1 && errorArray.includes('state')) {
      if (Object.keys(authState.resetUser).length > 0) {
        const data = {
          userId: authState.resetUser.user,
          token: authState.resetUser.token,
          password: values.password,
        };
        dispatch(resetPassword(data));
      }
    }
  }, [errors]);

  return (
    <div data-testid="forgetReset" className="main-login-section">
      {displayModal
        && (
          <ScreenModal
            icon={passwordResetModal.icon}
            header={passwordResetModal.header}
            textOne={passwordResetModal.textOne}
            textTwo={passwordResetModal.textTwo}
            closeModal={closeModal}
          />
        )}
      <div className="welcome-section">
        <AuthCard
          pageMainHeader={resetPasswordConstants.pageMainHeader}
          pageMiniHeader={resetPasswordConstants.pageMiniHeader}
          pageExtraHeading={resetPasswordConstants.pageExtraHeading}
        >
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
            {errors.password && <ErrorSection message={errors.password} />}
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
            {errors.confirm_password && <ErrorSection message={errors.confirm_password} />}
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

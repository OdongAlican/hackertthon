/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordConstants, passwordResetModal } from '../../../constants/index';
import Display from '../Display/Display';
import ScreenModal from '../../../generics/ScreenModal';
import AuthCard from '../../../generics/AuthCard';
import { PasswordInput } from '../../../generics/Input';
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

  const togglePassword = () => {
    if (passwordState === 'password') return setPasswordState('text');
    return setPasswordState('password');
  };

  const toggleConfirmPassword = () => {
    if (confirmPasswordState === 'password') return setConfirmPasswordState('text');
    return setConfirmPasswordState('password');
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
    <div data-testid="forgetReset" className="d-flex">
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
      <div className="col-md-6 col-sm-12">
        <AuthCard
          pageMainHeader={resetPasswordConstants.pageMainHeader}
          pageMiniHeader={resetPasswordConstants.pageMiniHeader}
          pageExtraHeading={resetPasswordConstants.pageExtraHeading}
        >
          <div className="col-md-12 col-sm-12 mt-3">
            <PasswordInput
              inputName="password"
              errors={errors.password}
              label="Password"
              inputSize="large"
              changeValue={handleChange}
              togglePassword={togglePassword}
              passwordState={passwordState}
            />
          </div>
          <div className="col-md-12 col-sm-12 mt-3">
            <PasswordInput
              inputName="confirm_password"
              errors={errors.confirm_password}
              label="Confirm Password"
              inputSize="large"
              changeValue={handleChange}
              togglePassword={toggleConfirmPassword}
              passwordState={confirmPasswordState}
            />
          </div>
          <div className="mt-4">
            <Button
              buttonName="Send Reset Link"
              clickButton={submitNewInformation}
            />
          </div>
          <div className="mt-2 fw-bold h6 text-center" style={{ fontSize: '13px' }}>OR</div>
          <Link to="/signup" className="fw-bold btn btn-light col-md-12" style={{ textDecoration: 'none', fontSize: '13px' }}>
            Go to sign up
          </Link>
          <Link to="/" className="fw-bold btn btn-secondary col-md-12 mt-2" style={{ textDecoration: 'none', fontSize: '13px' }}>
            Go to Log in
          </Link>
        </AuthCard>
      </div>
      <div className="col-md-6 h-100 col-sm-12" style={{ heigth: '100vh' }}>
        <Display />
      </div>
    </div>
  );
};

export default PasswordReset;

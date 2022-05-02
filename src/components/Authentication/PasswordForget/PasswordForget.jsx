import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { forgotPassword } from '../../../actions';
import { forgetPasswordConstants, forgotPasswordModal } from '../../../constants/index';
import { authValidator } from '../../../constants/validators';
import { AuthCard, ErrorSection, ScreenModal } from '../../../generics/Generics';
import { Input } from '../../../generics/Input';
import Display from '../Display/Display';
import Button from '../../../generics/Button';

const initialState = { userEmail: '' };

const PasswordForget = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);
  const [displayModal, setDisplayModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const emailContentState = useSelector(state => state.authentication.emailContent);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitNewPassword = () => setErrors(authValidator(values, 'verification'));
  const closeModal = () => setDisplayModal(false);

  useEffect(() => {
    if (Object.keys(emailContentState).length > 0) {
      setDisplayModal(true);
    }
  }, [emailContentState]);

  useEffect(() => {
    const errorArray = Object.keys(errors);
    if (errorArray.length === 1 && errorArray.includes('state')) {
      dispatch(forgotPassword(values, history));
    }
  }, [errors]);
  return (
    <div data-testid="forgetPassword" className="main-login-section">
      {displayModal
        && (
          <ScreenModal
            icon={forgotPasswordModal.icon}
            header={forgotPasswordModal.header}
            textOne={forgotPasswordModal.textOne}
            textTwo={forgotPasswordModal.textTwo}
            closeModal={closeModal}
            email={emailContentState.message.to}
          />
        )}
      <div className="welcome-section">
        <AuthCard
          pageMainHeader={forgetPasswordConstants.pageMainHeader}
          pageMiniHeader={forgetPasswordConstants.pageMiniHeader}
          pageExtraHeading={forgetPasswordConstants.pageExtraHeading}
        >
          <div className="login-email-section mt-3">Email Adress</div>
          <div className="login-email-input">
            <Input
              inputName="userEmail"
              inputType="text"
              changeValue={handleChange}
            />
            {errors.userEmail && <ErrorSection message={errors.userEmail} />}
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

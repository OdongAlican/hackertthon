import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { forgotPassword } from '../../../actions';
import { forgetPasswordConstants, forgotPasswordModal } from '../../../constants/index';
import { authValidator } from '../../../constants/validators';
import ScreenModal from '../../../generics/ScreenModal';
import AuthCard from '../../../generics/AuthCard';
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
    setValues({ ...values, [name]: value });
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
    <div data-testid="forgetPassword" className="d-flex">
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
      <div className="col-md-6 col-sm-12">
        <AuthCard
          pageMainHeader={forgetPasswordConstants.pageMainHeader}
          pageMiniHeader={forgetPasswordConstants.pageMiniHeader}
          pageExtraHeading={forgetPasswordConstants.pageExtraHeading}
        >
          <div className="col-md-12 col-sm-12 mt-3">
            <Input
              inputName="userEmail"
              errors={errors.userEmail}
              placeholder="Type here ...."
              label="Email Address"
              inputType="text"
              inputSize="large"
              changeValue={handleChange}
            />
          </div>
          <div className="mt-4">
            <Button
              buttonName="Send Reset Link"
              clickButton={submitNewPassword}
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

export default PasswordForget;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Display from '../Display/Display';
import AuthCard from '../../../generics/AuthCard';
import { Input, PasswordInput } from '../../../generics/Input';
import { signupConstants } from '../../../constants/index';
import { authValidator } from '../../../constants/validators';
import { signUp } from '../../../actions';
import Button from '../../../generics/Button';

const initialState = {
  first_name: '', last_name: '', userEmail: '', password: '', confirm_password: '',
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [passwordState, setPasswordState] = useState('password');
  const [confirmPasswordState, setConfirmPasswordState] = useState('password');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const togglePassword = () => {
    if (passwordState === 'password') return setPasswordState('text');
    return setPasswordState('password');
  };

  const toggleConfirmPassword = () => {
    if (confirmPasswordState === 'password') return setConfirmPasswordState('text');
    return setConfirmPasswordState('password');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitSignUp = () => setErrors(authValidator(values, 'signup'));

  const signUpFunction = async () => {
    const errorArray = Object.keys(errors);
    if (errorArray.length === 1 && errorArray.includes('state')) {
      setLoading(true);
      const response = dispatch(signUp(values));
      const result = await response.then(result => result?.firstname);
      if (result) {
        toast.success('Account Created, Log In');
        return history.push('/');
      }
      toast.error('User probably exists already!!');
      setLoading(false);
    }
  };

  useEffect(() => { signUpFunction(); }, [errors]);

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="row w-100" style={{ border: '1px solid #2A57D3' }}>
        <div className="col-md-6 col-sm-12">
          <AuthCard
            pageMainHeader={signupConstants.pageMainHeader}
            pageMiniHeader={signupConstants.pageMiniHeader}
            pageExtraHeading={signupConstants.pageExtraHeading}
            loading={loading}
            text="Signing up, Please Wait"
          >
            <div className="row mt-3">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Input
                  inputName="first_name"
                  errors={errors.first_name}
                  placeholder="Type here ...."
                  label="First Name"
                  inputType="text"
                  changeValue={handleChange}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Input
                  inputName="last_name"
                  errors={errors.last_name}
                  placeholder="Type here ...."
                  label="Last Name"
                  inputType="text"
                  changeValue={handleChange}
                />
              </div>
            </div>
            <div className="mt-3">
              <Input
                inputName="userEmail"
                errors={errors.userEmail}
                placeholder="Type here ...."
                label="Email Adress"
                inputType="email"
                inputSize="large"
                changeValue={handleChange}
              />
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 col-md-12 col-sm-12">
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
              <div className="col-lg-6 col-md-12 col-sm-12">
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
            </div>
            <div className="login-button-section mt-4">
              <Button
                buttonName="Sign Up"
                clickButton={submitSignUp}
              />
            </div>
            <div className="mt-2 pb-2">
              Already have an account ?
              {' '}
              <Link className="fw-bold" style={{ textDecoration: 'none', fontSize: '13px', color: '#2a57d3' }} to="/">Log In Here</Link>
            </div>
          </AuthCard>
        </div>
        <div className="col-md-6 col-sm-12 p-0 d-flex align-items-center">
          <Display />
        </div>
      </div>
    </div>
  );
};

export default Signup;

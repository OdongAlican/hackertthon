/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Display from '../Display/Display';
import AuthCard from '../../../components/AuthCard';
import { Input, PasswordInput } from '../../../components/Input';
import { authValidator } from '../../../constants/validators';
import { signIn } from '../../../actions';
import { loginConstants } from '../../../constants/index';
import Button from '../../../components/Button';

const initialState = { userEmail: '', password: '' };

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordState, setPasswordState] = useState('password');

  const authenticationError = useSelector(state => state.authentication.error);
  const dispatch = useDispatch();
  const history = useHistory();

  const togglePassword = () => {
    if (passwordState === 'password') return setPasswordState('text');
    return setPasswordState('password');
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitLogin = () => setErrors(authValidator(values, 'signin'));

  const authFunction = async () => {
    const errorArray = Object.keys(errors);
    if (errorArray.length === 1 && errorArray.includes('state')) {
      setLoading(true);
      const response = dispatch(signIn(values, history));
      const result = await response.then(result => result?.user);
      if (result) return toast.success(`Welcome ${result?.firstname} !!`);
      setLoading(false);
      return toast.error(authenticationError || 'Invalid Email or Password');
    }
  };

  useEffect(() => { authFunction(); }, [errors]);

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="row w-100" style={{ border: '1px solid #2A57D3' }}>
        <div className="col-md-6 col-sm-12">
          <AuthCard
            pageMainHeader={loginConstants.pageMainHeader}
            pageMiniHeader={loginConstants.pageMiniHeader}
            pageExtraHeading={loginConstants.pageExtraHeading}
            loading={loading}
            text="Loging In, Please Wait"
          >
            <div className="mt-3">
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
            <div className="mt-3">
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
            <Link to="/forgetpassword" className="fw-bold" style={{ textDecoration: 'none', fontSize: '13px', color: '#2a57d3' }}>
              Forgotten your password?
            </Link>
            <div className="login-button-section mt-3">
              <Button
                buttonSize="large"
                buttonName="Log In"
                clickButton={submitLogin}
              />
            </div>
            <div className="mt-2">
              Don&#39;t have an account ?
              {' '}
              <Link className="fw-bold" style={{ textDecoration: 'none', fontSize: '13px', color: '#2a57d3' }} to="/signup">Sign Up Here</Link>
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

export default Login;

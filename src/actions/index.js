import { PostRequest, GetRequest } from '../utils/index';
import {
  AUTHENTICATED, UNAUTHENTICATED,
  AUTHENTICATION_ERROR, PENDING_REQUEST,
  TOKEN_VERIFICATION, PASSWORD_RESET,
  PASSWORD_UPDATE, updatePassword,
  signInRoute, methods, signUpRoute,
  verificationRoute, resetToken,
} from './constants';

export const signIn = data => async dispatch => {
  dispatch({ type: PENDING_REQUEST, payload: 'Loading Content' });
  try {
    const response = await PostRequest(methods.post, signInRoute, data);
    dispatch({ type: AUTHENTICATED });
    localStorage.setItem('user', response?.data?.token);
  } catch (error) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error?.message });
  }
};

export const signUp = data => async dispatch => {
  dispatch({ type: PENDING_REQUEST, payload: 'Loading Content' });
  try {
    const response = await PostRequest(methods.post, signUpRoute, data);
    dispatch({ type: UNAUTHENTICATED, payload: response?.data });
  } catch (error) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error?.message });
  }
};

export const forgotPassword = data => async dispatch => {
  dispatch({ type: PENDING_REQUEST, payload: 'Loading Content' });
  try {
    const response = await PostRequest(methods.post, verificationRoute, data);
    console.log(response?.data, 'response data');
    dispatch({ type: PASSWORD_RESET, payload: response?.data });
  } catch (error) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error?.message });
  }
};

export const fetchResetToken = token => async dispatch => {
  dispatch({ type: PENDING_REQUEST, payload: 'Loading Content' });
  try {
    const response = await GetRequest(methods.get, `${resetToken}/${token}`);
    dispatch({ type: TOKEN_VERIFICATION, payload: response?.data });
  } catch (error) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error?.message });
  }
};

export const resetPassword = data => async dispatch => {
  dispatch({ type: PENDING_REQUEST, payload: 'Loading Content' });
  try {
    const response = await PostRequest(methods.post, updatePassword, data);
    dispatch({ type: PASSWORD_UPDATE, payload: response?.data });
  } catch (error) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error?.message });
  }
};

export const signOut = () => localStorage.removeItem('user');

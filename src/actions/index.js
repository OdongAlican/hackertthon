import { PostRequest } from '../utils/index';
import {
  AUTHENTICATED, AUTHENTICATION_ERROR, PENDING_REQUEST, signInRoute, methods, signUpRoute,
} from './constants';

export const signIn = data => async dispatch => {
  dispatch({ type: PENDING_REQUEST, payload: 'Loading Content' });
  try {
    const response = await PostRequest(methods.post, data, signInRoute);
    dispatch({ type: AUTHENTICATED });
    localStorage.setItem('user', response.data.token);
  } catch (error) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error.message });
  }
};

export const signUp = data => async dispatch => {
  dispatch({ type: PENDING_REQUEST, payload: 'Loading Content' });
  try {
    const response = await PostRequest(methods.post, data, signUpRoute);
    dispatch({ type: AUTHENTICATED });
    localStorage.setItem('user', response.data.token);
  } catch (error) {
    dispatch({ type: AUTHENTICATION_ERROR, payload: error.message });
  }
};

export const signOut = () => localStorage.removeItem('user');

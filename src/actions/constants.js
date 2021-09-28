export const AUTHENTICATED = 'AUTHENTICATED_USER';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const PENDING_REQUEST = 'PENDING_REQUEST';

export const methods = {
  get: 'get', post: 'post', delete: 'delete', put: 'put',
};

export const baseUrl = 'http://localhost:8000';
export const signUpRoute = 'api/users/register';
export const signInRoute = 'api/users/login';

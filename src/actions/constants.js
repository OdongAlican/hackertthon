export const AUTHENTICATED = 'AUTHENTICATED_USER';
export const UNAUTHENTICATED = 'UNAUTHENTICATED_USER';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const PENDING_REQUEST = 'PENDING_REQUEST';
export const TOKEN_VERIFICATION = 'TOKEN_VERIFICATION';
export const PASSWORD_RESET = 'PASSWORD_RESET';
export const PASSWORD_UPDATE = 'PASSWORD_UPDATE';

export const methods = {
  get: 'get', post: 'post', delete: 'delete', put: 'put',
};

export const baseUrl = 'http://localhost:3000';
export const signUpRoute = 'register';
export const signInRoute = 'login';
export const verificationRoute = 'verificationmail';
export const resetToken = 'passwordreset';
export const updatePassword = 'updatepassword';

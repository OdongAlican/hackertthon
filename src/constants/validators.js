export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const loginValidator = values => {
  const errorValues = {};
  errorValues.state = 'login state';
  if (!values.loginemailinput) {
    errorValues.loginemailinput = 'Email required';
  }
  if (!emailRegex.test(values.loginemailinput) && values.loginemailinput) {
    errorValues.loginemailinput = 'Invalid email';
  }
  if (!values.loginpasswordinput) {
    errorValues.loginpasswordinput = 'Passord Required';
  }

  return errorValues;
};

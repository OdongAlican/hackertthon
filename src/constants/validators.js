export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const authValidator = (values, state) => {
  const errorValues = {};
  if (state === 'signin') {
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
  }
  if (state === 'signup') {
    errorValues.state = 'signup state';
    if (!values.firstname) {
      errorValues.firstname = 'First name rquired';
    }
    if (!values.lastname) {
      errorValues.lastname = 'Last name rquired';
    }
    if (!values.signupemail) {
      errorValues.signupemail = 'Email required';
    }
    if (!emailRegex.test(values.signupemail) && values.signupemail) {
      errorValues.signupemail = 'Invalid email';
    }
    if (!values.signuppassword) {
      errorValues.signuppassword = 'Passord Required';
    }
  }

  return errorValues;
};

export const newPasswordValidator = values => {
  const errorValues = {};
  if (!values.newpasswordemail) {
    errorValues.newpasswordemail = 'Email required';
  }
  if (!emailRegex.test(values.newpasswordemail) && values.newpasswordemail) {
    errorValues.newpasswordemail = 'Invalid email';
  }
  return errorValues;
};

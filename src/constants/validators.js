export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const authValidator = (values, state) => {
  const errorValues = {};
  if (state === 'signin') {
    errorValues.state = 'login state';

    if (!values.userEmail) {
      errorValues.userEmail = 'Email required';
    }
    if (!emailRegex.test(values.userEmail) && values.userEmail) {
      errorValues.userEmail = 'Invalid email';
    }
    if (!values.password) {
      errorValues.password = 'Password Required';
    }
  }

  if (state === 'signup') {
    errorValues.state = 'signup state';
    if (!values.first_name) {
      errorValues.first_name = 'First name rquired';
    }
    if (!values.last_name) {
      errorValues.last_name = 'Last name rquired';
    }
    if (!values.userEmail) {
      errorValues.userEmail = 'Email required';
    }
    if (!emailRegex.test(values.userEmail) && values.userEmail) {
      errorValues.userEmail = 'Invalid email';
    }
    if (!values.password) {
      errorValues.password = 'Password Required';
    }
    if (values.confirm_password !== values.password && values.confirm_password) {
      errorValues.confirm_password = 'Passwords Do not match';
    }
  }

  if (state === 'verification') {
    errorValues.state = 'verification state';
    if (!values.userEmail) {
      errorValues.userEmail = 'Email required';
    }
    if (!emailRegex.test(values.userEmail) && values.userEmail) {
      errorValues.userEmail = 'Invalid email';
    }
  }

  if (state === 'reset') {
    errorValues.state = 'reset state';
    if (!values.password) {
      errorValues.password = 'Password Required';
    }
    if (values.confirm_password !== values.password && values.confirm_password) {
      errorValues.confirm_password = 'Passwords Do not match';
    }
  }

  return errorValues;
};

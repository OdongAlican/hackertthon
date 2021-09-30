import {
  AUTHENTICATED, AUTHENTICATION_ERROR,
  TOKEN_VERIFICATION, PASSWORD_RESET,
  PASSWORD_UPDATE,
} from '../actions/constants';

const initialState = {
  authenticated: false,
  error: '',
  loading: true,
  resetUser: {},
  emailContent: {},
  passwordMessage: {},
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        error: '',
        loading: false,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
        loading: false,
      };
    case TOKEN_VERIFICATION:
      return {
        ...state,
        authenticated: false,
        error: '',
        loading: false,
        resetUser: action.payload,
      };
    case PASSWORD_RESET:
      return {
        ...state,
        authenticated: false,
        error: '',
        loading: false,
        emailContent: action.payload,
      };
    case PASSWORD_UPDATE:
      return {
        ...state,
        authenticated: false,
        passwordMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authentication;

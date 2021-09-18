import { AUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/constants';

const initialState = {
  authenticated: false,
  error: '',
  loading: true,
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
    default:
      return state;
  }
};

export default authentication;

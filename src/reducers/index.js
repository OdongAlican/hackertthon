import { combineReducers } from 'redux';
import authentication from './authentication';
import products from './products';

const rootReducer = combineReducers({
  authentication,
  products,
});

export default rootReducer;

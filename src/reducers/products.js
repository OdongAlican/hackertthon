import { FETCH_PRODUCTS } from '../actions/constants';

const initialState = {
  productsList: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
      };
    default:
      return state;
  }
};

export default products;

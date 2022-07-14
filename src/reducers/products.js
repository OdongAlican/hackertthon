import { FETCH_PRODUCTS } from '../actions/constants';

const initialState = {
  productsList: { products: [], total: 0 },
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: {
          products: action?.payload?.products,
          total: action?.payload?.total,
        },
      };
    default:
      return state;
  }
};

export default products;

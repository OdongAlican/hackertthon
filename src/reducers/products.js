import { DELETED_PRODUCT, FETCH_PRODUCTS, NEW_PRODUCT } from '../actions/constants';

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
    case NEW_PRODUCT:
      return {
        ...state,
        productsList: {
          products: [
            action?.payload, ...state?.productsList?.products,
          ],
        },
      };
    case DELETED_PRODUCT:
      return {
        ...state,
        productsList: {
          products: state?.productsList?.products.filter(
            product => product.id !== action.payload,
          ),
        },
      };
    default:
      return state;
  }
};

export default products;

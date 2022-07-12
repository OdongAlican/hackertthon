/* eslint-disable import/prefer-default-export */

import { GetRequest } from '../utils/index';
import { getProductsList, methods, FETCH_PRODUCTS } from './constants';

export const fetchProductsList = () => async dispatch => {
  try {
    const response = await GetRequest(methods.get, `${getProductsList}?page=1`);
    dispatch({ type: FETCH_PRODUCTS, payload: response?.data });
  } catch (error) {
    console.log(error?.response?.data, 'response error');
  }
};

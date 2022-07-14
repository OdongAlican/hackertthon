/* eslint-disable import/prefer-default-export */

import { GetRequest } from '../utils/index';
import { getProductsList, methods, FETCH_PRODUCTS } from './constants';

export const fetchProductsList = page => async dispatch => {
  try {
    const response = await GetRequest(methods.get, `${getProductsList}?page=${page}`);
    console.log(response?.data?.total, 'response?.data?.total');
    const data = { products: JSON.parse(response?.data?.products), total: response?.data?.total };
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error?.response?.data, 'response error');
  }
};

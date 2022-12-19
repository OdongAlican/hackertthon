/* eslint-disable import/prefer-default-export */

import { DeleteRequest, GetRequest, PostRequest } from '../utils/index';
import {
  getProductsList, methods, FETCH_PRODUCTS, NEW_PRODUCT, DELETED_PRODUCT,
} from './constants';

export const fetchProductsList = page => async dispatch => {
  try {
    const response = await GetRequest(methods.get, `${getProductsList}?page=${page}`);
    const data = { products: JSON.parse(response?.data?.products), total: response?.data?.total };
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error?.response?.data, 'response error');
  }
};

export const createNewProduct = data => async dispatch => {
  const requestBody = {
    ...data, productname: data?.name, productprice: data?.price,
  };
  try {
    const response = await PostRequest(methods.post, getProductsList, requestBody);
    dispatch({ type: NEW_PRODUCT, payload: response?.data });
  } catch (error) {
    console.log(error?.response?.data, 'response error');
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    await DeleteRequest(methods.delete, `${getProductsList}/${id}`);
    dispatch({ type: DELETED_PRODUCT, payload: id });
  } catch (error) {
    console.log(error?.response?.data, 'response error');
  }
};

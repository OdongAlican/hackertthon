import axios from 'axios';
import { baseUrl } from '../actions/constants';

const tokenFxn = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const headers = { headers: { Authorization: `Bearer ${user?.token}` } };
  return headers || undefined;
};

export const PostRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data, tokenFxn());
  return response;
};

export const GetRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, tokenFxn());
  return response;
};

export const PutRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data, tokenFxn());
  return response;
};

export const DeleteRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, tokenFxn());
  return response;
};

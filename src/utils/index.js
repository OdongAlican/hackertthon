import axios from 'axios';
import { baseUrl } from '../actions/constants';

const headers = { headers: { Authorization: `Bearer ${localStorage.user}` } };

export const PostRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data, headers);
  return response;
};

export const GetRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, headers);
  return response;
};

export const PutRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data, headers);
  return response;
};

export const DeleteRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, headers);
  return response;
};

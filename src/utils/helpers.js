/* eslint-disable no-confusing-arrow */

export const fetchLoggedInUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

export const capitalize = str => str?.charAt(0)?.toUpperCase() + str?.slice(1);

export const determineTitle = string => string?.includes('sales') ? 'Product' : 'Purchase';

export const determineSubTitle = string => {
  if (string?.includes('sales')) return 'Select and view all your past sales';
  if (string?.includes('requests')) return 'Select and view all your past requests';
  if (string?.includes('purchase')) return 'Select and view all your past purchase';
  if (string?.includes('products-details')) return '';
  return 'Make your choice';
};

export const formatDate = string => string.substring(0, string.indexOf('T'));

export const convertImageToBase64 = file => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => { resolve(fileReader.result); };
  fileReader.onerror = (error => { reject(error); });
});

export const createSubString = (str, length) => str.length < length ? str
  : `${str.substring(0, (length + 1))}...`;

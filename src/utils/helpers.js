/* eslint-disable no-confusing-arrow */

export const fetchLoggedInUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const determineTitle = string => string.includes('sales') ? 'Sales' : 'Purchase';

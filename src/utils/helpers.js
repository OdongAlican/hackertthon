export const fetchLoggedInUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

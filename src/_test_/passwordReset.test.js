import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PasswordReset from '../App/Authentication/PasswordReset/PasswordReset';
import initialState from './login.test';

afterEach(cleanup);
let store;

const authentication = {
  emailContent: { email: 'test@gmail.com' },
  passwordMessage: { message: 'messaze' },
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('renders password reset correctly', () => {
  store = mockStore({ ...initialState, authentication });
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><PasswordReset /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('forgetReset');
  expect(result[0]).toHaveTextContent('Kindly enter a different password from your current password');
  expect(result[0]).toHaveTextContent('Reset password');
});

it('renders password reset correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><PasswordReset /></Provider>
    </Router>,
  );
  const result = getAllByTestId('forgetReset');
  expect(result[0]).not.toHaveTextContent('Some Random Text');
});

it('matches password reset snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><PasswordReset /></Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});

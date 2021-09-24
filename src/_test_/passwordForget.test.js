import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PasswordForget from '../components/Authentication/PasswordForget/PasswordForget';
import initialState from './login.test';

afterEach(cleanup);
let store;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('renders forget password correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><PasswordForget /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('forgetPassword');
  expect(result[0]).toHaveTextContent('We want to send you a password reset link, kindly enter your correct email address');
  expect(result[0]).toHaveTextContent('Forgotten password');
});

it('renders forget password correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><PasswordForget /></Provider>
    </Router>,
  );
  const result = getAllByTestId('forgetPassword');
  expect(result[0]).not.toHaveTextContent('Some Random Text');
});

it('matches forget password snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><PasswordForget /></Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});

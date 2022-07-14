import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '../App/Authentication/Login/Login';

afterEach(cleanup);

const initialState = {
  authentication: {
    authenticated: false,
    error: '',
    loading: true,
  },
};

const mockStore = configureStore();
let store;

it('renders Login correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Login /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appLogin');
  expect(result[0]).toHaveTextContent('Login with your accurate information to access your account');
  expect(result[0]).toHaveTextContent("Don't have an account ? Sign Up Here");
});

it('renders Login correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Login /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appLogin');
  expect(result[0]).not.toHaveTextContent('Some Random Text');
});

it('matches Login snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><Login /></Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});

export default initialState;

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dashboard from '../components/Dashboard/Dashboard';
import initialState from './login.test';

afterEach(cleanup);


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

it('renders Dashboard correctly', () => {
    store = mockStore({...initialState, authenticated: true});
    const { getAllByTestId } = render(
      <Router>
        <Provider store={store}><Dashboard /></Provider>
        ,
      </Router>,
    );
    const result = getAllByTestId('appDashboard');
    expect(result[0]).toHaveTextContent('HOMEPURCHASESALESREQUESTSAlican SundaySelect and view all your past Home');
  });

  it('renders Dashboard correctly', () => {
    store = mockStore(initialState);
    const { getAllByTestId } = render(
      <Router>
        <Provider store={store}><Dashboard /></Provider>
      </Router>,
    );
    const result = getAllByTestId('appDashboard');
    expect(result[0]).not.toHaveTextContent('Some Random Text');
  });
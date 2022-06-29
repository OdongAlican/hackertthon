import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Router from './components/Router/Router';
import rootReducer from './reducers';
import { AUTHENTICATED } from './actions/constants';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const user = localStorage.getItem('user');
if (user) { store.dispatch({ type: AUTHENTICATED }); }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

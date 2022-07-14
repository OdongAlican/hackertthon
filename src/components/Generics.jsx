/* eslint-disable  react/prop-types */
/* eslint-disable  no-nested-ternary */

import React from 'react';
import './index.css';

import { Route } from 'react-router-dom';
import PendingPurchases from '../App/Pages/SubRoutes/Purchase/PendingPurchases';
import RecievedPurchase from '../App/Pages/SubRoutes/Purchase/RecievedPurchase';
import FailedPurchase from '../App/Pages/SubRoutes/Purchase/FailedPurchase';
import RecievedSale from '../App/Pages/SubRoutes/Sales/RecievedSale';
import PendingSales from '../App/Pages/SubRoutes/Sales/PendingSales';
import FailedSales from '../App/Pages/SubRoutes/Sales/FailedSales';
import ProductCard from './ProductCard';

export const ErrorSection = ({ message }) => <div className="text-danger fw-bold" style={{ fontSize: '12px' }}>{message}</div>;

export const InnerRoutesCardOne = ({ path }) => (
  <div className="inner-routes-card-one">
    <Route exact path={`${path}`}>
      {
        path.includes('purchase') ? (<RecievedPurchase Card={ProductCard} />)
          : path.includes('sales') ? (<RecievedSale Card={ProductCard} />)
            : null
      }
    </Route>
    <Route path={`${path}/pending`}>
      {
        path.includes('purchase') ? (<PendingPurchases Card={ProductCard} />)
          : path.includes('sales') ? (<PendingSales Card={ProductCard} />)
            : null
      }
    </Route>
    <Route path={`${path}/failed`}>
      {
        path.includes('purchase') ? (<FailedPurchase Card={ProductCard} />)
          : path.includes('sales') ? (<FailedSales Card={ProductCard} />)
            : null
      }
    </Route>
  </div>
);

export const InnerRoutesCardTwo = ({ children }) => (
  <div className="inner-routes-card-two">
    {children}
  </div>
);

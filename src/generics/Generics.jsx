/* eslint-disable  react/prop-types */
/* eslint-disable  no-nested-ternary */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable  jsx-a11y/no-static-element-interactions */

import React from 'react';
import './index.css';
import { NavLink, Route } from 'react-router-dom';
import PendingPurchases from '../components/Dashboard/SubRoutes/Purchase/PendingPurchases';
import RecievedPurchase from '../components/Dashboard/SubRoutes/Purchase/RecievedPurchase';
import FailedPurchase from '../components/Dashboard/SubRoutes/Purchase/FailedPurchase';

export const Input = ({
  inputSize, inputName, changeValue, inputType,
}) => (
  <input
    onChange={changeValue}
    type={inputType}
    name={inputName}
    className={
    inputSize === 'small' ? 'small-input-section'
      : inputSize === 'medium' ? 'medium-input-section'
        : 'large-input-section'
    }
  />
);
export const Button = ({ buttonName, buttonSize, clickButton }) => (
  <button
    type="button"
    onClick={clickButton}
    className={
    buttonSize === 'small' ? 'small-button-section'
      : buttonSize === 'medium' ? 'medium-button-section'
        : 'large-button-section'
    }
  >
    {buttonName}
  </button>
);

export const AuthCard = ({
  children, pageMainHeader, pageMiniHeader, pageExtraHeading,
}) => (
  <div className="inner-form-section">
    <svg className="main-page-logo" width="40" height="52" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.597 15.5974L35.572 15.5725C35.57 15.5711 35.5684 15.5693 35.5674 15.5671L20.0007 0L4.43409 15.5667C4.4323 15.5685 4.4313 15.5709 4.42949 15.5721L4.4038 15.597C2.02346 17.9907 0.511527 21.1114 0.108363 24.4631C-0.2948 27.8148 0.433941 31.205 2.17873 34.095C3.92353 36.985 6.58425 39.2088 9.73794 40.4128C12.8916 41.6168 16.3573 41.7322 19.584 40.7403C19.8555 40.6573 20.1457 40.6573 20.4172 40.7403C23.6437 41.7318 27.1091 41.6164 30.2626 40.4122C33.4161 39.208 36.0765 36.9844 37.8212 34.0946C39.5659 31.2048 40.2947 27.8148 39.8917 24.4633C39.4887 21.1118 37.977 17.9911 35.597 15.5974ZM9.96937 25.8627C9.89359 25.9384 9.83349 26.0285 9.79251 26.1274C9.7515 26.2263 9.7304 26.3324 9.73042 26.4395C9.75812 29.187 10.5346 31.8748 11.9762 34.2138C12.009 34.2669 12.0241 34.329 12.0195 34.3911C12.0148 34.4532 11.9906 34.5123 11.9504 34.5599C11.9101 34.6076 11.8558 34.6411 11.7953 34.656C11.7347 34.6709 11.671 34.6663 11.6133 34.6427C10.5295 34.1869 9.54494 33.5242 8.71465 32.6918C7.0131 30.99 6.05652 28.6823 6.05497 26.2757C6.05343 23.8691 7.00705 21.5603 8.70642 19.8563L20.0007 8.56312L31.2943 19.8563C32.994 21.5601 33.9479 23.8689 33.9463 26.2757C33.9449 28.6823 32.9882 30.99 31.2865 32.6918C30.4562 33.5242 29.4717 34.1869 28.3881 34.6427C28.3302 34.6663 28.2665 34.6709 28.206 34.656C28.1455 34.6411 28.0912 34.6074 28.0508 34.5599C28.0106 34.5123 27.9863 34.4532 27.9817 34.3909C27.977 34.3288 27.9921 34.2667 28.0249 34.2136C29.4669 31.8748 30.2437 29.187 30.2719 26.4395C30.2719 26.3324 30.2506 26.2263 30.2093 26.1272C30.1681 26.0281 30.1078 25.9382 30.0319 25.8625L24.6899 20.1963C24.6366 20.1518 24.5697 20.1275 24.5004 20.1275C24.4312 20.1275 24.3641 20.1518 24.311 20.1963C24.2577 20.2405 24.222 20.3022 24.2095 20.3703C24.197 20.4385 24.2089 20.5086 24.2431 20.5689C26.3178 24.3234 24.5337 29.7162 21.5585 32.6918L21.5428 32.7075C21.1322 33.1137 20.5778 33.3415 20.0003 33.3413C19.4226 33.3411 18.8684 33.1129 18.4581 32.7065L18.4436 32.6918C15.4673 29.7162 13.6842 24.324 15.7592 20.5697C15.7933 20.5094 15.8052 20.4393 15.7928 20.3711C15.7804 20.303 15.7445 20.2413 15.6913 20.1971C15.6382 20.1527 15.5711 20.1283 15.5019 20.1283C15.4326 20.1283 15.3656 20.1527 15.3124 20.1971L9.96937 25.8627Z" fill="#172AD2" />
    </svg>
    <div className="page-main-hearder">
      {
        pageExtraHeading.length !== 0
          ? (
            <div>
              {pageMainHeader}
              {' '}
              <span className="extra-heading-span">{pageExtraHeading}</span>
            </div>
          )
          : pageMainHeader
      }
    </div>
    <div className="page-mini-header">
      { pageMiniHeader }
    </div>
    {children}
  </div>
);

export const ErrorSection = ({ message }) => <div className="error-section">{ message }</div>;

export const ScreenModal = ({
  icon, header, textOne, textTwo, closeModal, email,
}) => (
  <div className="full-screen-modal-section">
    <div className="inner-full-screen-modal-section">
      <i onClick={closeModal} className="far fa-times-circle" />
      <div className="full-screen-modal-section-icon">
        <i className={icon} />
      </div>
      <div className="reset-link-header-section">
        { header }
      </div>
      <div className="reset-link-content-section">
        { textOne }
        {' '}
        { email && <span>{ email }</span>}
        <br />
        { textTwo }
      </div>
    </div>
  </div>
);

export const RoutesCard = ({ children }) => (
  <div className="routes-section-card">
    <div className="main-routes-card-header">Your Sales</div>
    <div className="mini-routes-card-header">
      select and view all your past sales
    </div>
    <div className="inner-nested-routes">
      { children }
    </div>
  </div>
);

export const InnerRoutesHeader = ({ nestedRecievedPath, nestedPendingPath, nestedFailedPath }) => (
  <div className="inner-nest-routes-header">
    <NavLink to={nestedRecievedPath}>RECIEVED</NavLink>
    <NavLink to={nestedPendingPath}>PENDING</NavLink>
    <NavLink to={nestedFailedPath}>FAILED</NavLink>
  </div>
);

export const ProductCard = ({
  productCardName, productCardSeller, productCardDate, productCardAmount,
}) => (
  <div className="product-card-section">
    <div className="product-card-section-header">{productCardName }</div>
    <div className="product-card-section-photo" />
    <div className="product-card-section-seller">
      <div className="product-card-section-seller-title">
        SELLER
        {' '}
        {' '}
        :
        {' '}
        <span>{ productCardSeller}</span>
      </div>
    </div>
    <div className="date-recieved-total-amount">
      <div className="date-recieved-total-amount-icon">
        <div className="circular-tick-section" />
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99996 11.2001L1.79996 7.0001L0.399963 8.4001L5.99996 14.0001L18 2.0001L16.6 0.600098L5.99996 11.2001Z" fill="#19BD22" />
        </svg>
      </div>
      <div className="date-recieved-total-amount-second border-right-importance">
        <h4>DATE RECIEVED</h4>
        <h5>{productCardDate}</h5>
      </div>
      <div className="date-recieved-total-amount-second">
        <h4>TOTAL AMOUNT</h4>
        <h5>{productCardAmount}</h5>
      </div>
    </div>
    <div className="recieved-button-section">
      <Button buttonName="VIEW DETAILS" buttonSize="large" />
    </div>
  </div>
);

export const InnerRoutesCardOne = ({ children, path }) => (
  <div className="inner-routes-card-one">
    <Route exact path={`${path}`} component={() => <RecievedPurchase Card={ProductCard} />} />
    <Route exact path={`${path}/pending`} component={PendingPurchases} />
    <Route exact path={`${path}/failed`} component={FailedPurchase} />
    { children }
  </div>
);

export const InnerRoutesWrapper = ({ children }) => (
  <div className="inner-routes-wrapper">
    { children }
  </div>
);

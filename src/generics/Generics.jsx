/* eslint-disable  react/prop-types */
/* eslint-disable  no-nested-ternary */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable  jsx-a11y/no-static-element-interactions */

import React from 'react';
import './index.css';
import {
  NavLink, Route, useHistory,
} from 'react-router-dom';
import PendingPurchases from '../components/Dashboard/SubRoutes/Purchase/PendingPurchases';
import RecievedPurchase from '../components/Dashboard/SubRoutes/Purchase/RecievedPurchase';
import FailedPurchase from '../components/Dashboard/SubRoutes/Purchase/FailedPurchase';
import RecievedSale from '../components/Dashboard/SubRoutes/Sales/RecievedSale';
import PendingSales from '../components/Dashboard/SubRoutes/Sales/PendingSales';
import FailedSales from '../components/Dashboard/SubRoutes/Sales/FailedSales';

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
export const Button = ({
  buttonName, buttonSize, clickButton, RequestButton,
  RequestButtonAccepted,
}) => (
  <button
    type="button"
    onClick={clickButton}
    className={
      RequestButton ? (
        'request-button-styles'
      ) : RequestButtonAccepted ? (
        'request-button-styles-accepted'
      ) : (
        buttonSize === 'small' ? 'small-button-section'
          : buttonSize === 'medium' ? 'medium-button-section'
            : 'large-button-section'
      )
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

export const RoutesCard = ({ children }) => {
  const [currentRoute, setCurrentRoute] = React.useState('');
  const history = useHistory();
  React.useEffect(() => {
    if (history.location.pathname.includes('sales')) {
      setCurrentRoute('sales');
    }
    if (history.location.pathname.includes('purchase')) {
      setCurrentRoute('purchase');
    }
  }, []);
  history.listen(location => {
    setCurrentRoute(location.pathname);
  });
  return (
    <div className="routes-section-card">
      <div className="main-routes-card-header">
        {
          currentRoute.includes('purchase') ? 'Your Purchase'
            : currentRoute.includes('sales') ? 'Your Sales'
              : currentRoute.includes('requests') ? 'Your Requests'
                : null
        }
      </div>
      <div className="mini-routes-card-header">
        Select and view all your past
        {' '}
        {
          currentRoute.includes('purchase') ? 'Purchase'
            : currentRoute.includes('sales') ? 'Sales'
              : currentRoute.includes('requests') ? 'Requests'
                : null
        }
      </div>
      <div className="inner-nested-routes">
        { children }
      </div>
    </div>
  );
};

export const InnerRoutesHeader = ({ url }) => (
  <div className="inner-nest-routes-header">
    <NavLink exact activeClassName="current-navlink" to={`${url}`}>RECIEVED</NavLink>
    <NavLink exact activeClassName="current-navlink" to={`${url}/pending`}>PENDING</NavLink>
    <NavLink exact activeClassName="current-navlink" to={`${url}/failed`}>FAILED</NavLink>
  </div>
);

export const ProductCard = ({
  productCardName, productCardSeller, productCardDate,
  productCardAmount, ProductStatus,
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
        {
          ProductStatus === 'recieved' ? (
            <div className="date-recieved-total-amount-icon-inner">
              <div className="circular-tick-section" />
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99996 11.2001L1.79996 7.0001L0.399963 8.4001L5.99996 14.0001L18 2.0001L16.6 0.600098L5.99996 11.2001Z" fill="#19BD22" />
              </svg>
            </div>
          ) : ProductStatus === 'pending' ? (
            <div className="date-recieved-total-amount-icon-inner">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.37 6.45 18 8.15 18 10C18 14.42 14.42 18 10 18Z" fill="#898989" />
              </svg>
            </div>
          ) : ProductStatus === 'failed' ? (
            <div className="date-recieved-total-amount-icon-inner">
              <div className="circular-tick-section circular-tick-section-failed" />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#C75353" />
              </svg>
            </div>
          ) : null
        }
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

export const InnerRoutesCardTwoSection = () => (
  <div className="inner-routes-card-two-innner-section">
    <div className="inner-routes-card-two-left">
      <div className="product-title-and-price">
        <div className="product-title-and-price-image" />
        <span className="product-title-and-price-image-first">When Science and Design Principles Meet</span>
        <svg className="dot-svg-section" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2" fill="#868899" />
        </svg>
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.2201 9.59421H17.3535V6.86984H20.2201C20.6508 6.86984 21 6.52491 21 6.09888C21 5.67282 20.6508 5.32768 20.2201 5.32768H17.3535V1.54747C17.3535 0.995663 17.2432 0.590644 17.0258 0.343925C16.8192 0.109216 16.5476 0 16.1714 0C15.8125 0 15.5511 0.108463 15.3485 0.341707C15.1337 0.588677 15.0246 0.994449 15.0246 1.54773V5.32814H9.63235L7.3396 1.89734C7.14338 1.59116 6.95888 1.30435 6.77972 1.02906C6.61841 0.781123 6.46107 0.579262 6.31246 0.428536C6.1809 0.295092 6.03097 0.191818 5.85561 0.112438C5.69015 0.0377443 5.4798 0.000251092 5.23094 0.000251092C4.91352 0.000251092 4.62539 0.0862428 4.34949 0.262913C4.07646 0.437658 3.88773 0.653705 3.77246 0.923438C3.67128 1.17978 3.61775 1.57258 3.61775 2.07962V5.32789H0.779594C0.348941 5.32793 0 5.67307 0 6.09909C0 6.52512 0.348941 6.87005 0.779637 6.87005H3.61779V9.59471H0.779637C0.348941 9.59471 0 9.93976 0 10.3659C0 10.7918 0.348941 11.1366 0.779637 11.1366H3.61779V15.4527C3.61779 15.9881 3.73158 16.3891 3.95696 16.6438C4.17129 16.8867 4.44305 16.9995 4.81209 16.9995C5.16814 16.9995 5.43778 16.8862 5.66138 16.6429C5.89035 16.3935 6.00617 15.9929 6.00617 15.4527V11.1366H10.8856L13.5261 15.1405C13.7097 15.4052 13.8993 15.6723 14.0883 15.9342C14.2589 16.1695 14.445 16.3767 14.6414 16.5498C14.8182 16.7064 15.0078 16.8212 15.2049 16.8912C15.4077 16.9634 15.6448 17 15.9079 17C16.622 17 17.3534 16.7838 17.3534 15.1806V11.1366H20.22C20.6508 11.1366 20.9999 10.7913 20.9999 10.3654C21 9.93951 20.6508 9.59421 20.2201 9.59421ZM15.0246 6.8698V9.59417H12.4839L10.6634 6.8698H15.0246ZM6.00622 3.73941L7.05397 5.32768H6.00622V3.73941ZM6.00622 9.59421V6.86984H8.07134L9.86834 9.59421H6.00622ZM15.0246 13.3968L13.5146 11.1366H15.0246V13.3968Z" fill="#172AD2" />
        </svg>
        <span className="product-title-and-price-image-second">25,000</span>
      </div>
      <div className="product-title-and-price-grid">
        <div className="date-of-order-product-header">DATE OF ORDER</div>
        <div className="date-of-order-product-header">DATE OF DELIVERY</div>
        <div className="date-of-order-product-header">SELLER</div>
        <div className="date-of-order-product-content">01/08/2021</div>
        <div className="date-of-order-product-content">01/08/2021</div>
        <div className="date-of-order-product-content">
          Smart Thimking Bookshop
        </div>

      </div>
    </div>
    <div className="inner-routes-card-two-right">
      <div className="inner-routes-card-two-right-first">
        <Button RequestButton buttonName="VIEW AGREEMENT" />
      </div>
      <div className="inner-routes-card-two-right-second">
        <Button RequestButtonAccepted buttonName="ACCEPTED" />
      </div>
      <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#868899" />
      </svg>
    </div>
  </div>
);

export const InnerRoutesCardTwo = ({ children }) => (
  <div className="inner-routes-card-two">
    { children }
  </div>
);

export const InnerRoutesWrapper = ({ children }) => (
  <div className="inner-routes-wrapper">
    { children }
  </div>
);

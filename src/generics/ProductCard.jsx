/* eslint-disable  react/prop-types */
/* eslint-disable  no-nested-ternary */

import React from 'react';
import Button from './Button';

const ProductCard = ({
  productCardName, productCardSeller, productCardDate,
  productCardAmount, ProductStatus,
}) => (
  <div className="product-card-section">
    <div className="product-card-section-header">{productCardName}</div>
    <div className="product-card-section-photo" />
    <div className="product-card-section-seller">
      <div className="product-card-section-seller-title">
        SELLER
        {' '}
        {' '}
        :
        {' '}
        <span>{productCardSeller}</span>
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

export default ProductCard;

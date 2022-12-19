/* eslint-disable  react/prop-types */

import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { formatDate, capitalize } from '../utils/helpers';
import { EditDeleteModal } from './Modal';
import { deleteProduct } from '../actions/products';

const InnerRoutesCardTwoSection = ({ element, clickEvent }) => {
  const dispatch = useDispatch();
  const deleteAction = () => dispatch(deleteProduct(element.id));

  return (
    <div className="inner-routes-card-two-innner-section">
      <div className="product-title-and-price-image">
        <img src={element?.image && (JSON.parse(element?.image))[0]} alt="10x10" className="w-100 h-100 rounded-circle" />
      </div>
      <div className="inner-routes-card-two-left">
        <div className="product-title-and-price">
          <span className="product-title-and-price-image-first">{element?.productname}</span>
          <svg className="dot-svg-section" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#868899" />
          </svg>
          <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2201 9.59421H17.3535V6.86984H20.2201C20.6508 6.86984 21 6.52491 21 6.09888C21 5.67282 20.6508 5.32768 20.2201 5.32768H17.3535V1.54747C17.3535 0.995663 17.2432 0.590644 17.0258 0.343925C16.8192 0.109216 16.5476 0 16.1714 0C15.8125 0 15.5511 0.108463 15.3485 0.341707C15.1337 0.588677 15.0246 0.994449 15.0246 1.54773V5.32814H9.63235L7.3396 1.89734C7.14338 1.59116 6.95888 1.30435 6.77972 1.02906C6.61841 0.781123 6.46107 0.579262 6.31246 0.428536C6.1809 0.295092 6.03097 0.191818 5.85561 0.112438C5.69015 0.0377443 5.4798 0.000251092 5.23094 0.000251092C4.91352 0.000251092 4.62539 0.0862428 4.34949 0.262913C4.07646 0.437658 3.88773 0.653705 3.77246 0.923438C3.67128 1.17978 3.61775 1.57258 3.61775 2.07962V5.32789H0.779594C0.348941 5.32793 0 5.67307 0 6.09909C0 6.52512 0.348941 6.87005 0.779637 6.87005H3.61779V9.59471H0.779637C0.348941 9.59471 0 9.93976 0 10.3659C0 10.7918 0.348941 11.1366 0.779637 11.1366H3.61779V15.4527C3.61779 15.9881 3.73158 16.3891 3.95696 16.6438C4.17129 16.8867 4.44305 16.9995 4.81209 16.9995C5.16814 16.9995 5.43778 16.8862 5.66138 16.6429C5.89035 16.3935 6.00617 15.9929 6.00617 15.4527V11.1366H10.8856L13.5261 15.1405C13.7097 15.4052 13.8993 15.6723 14.0883 15.9342C14.2589 16.1695 14.445 16.3767 14.6414 16.5498C14.8182 16.7064 15.0078 16.8212 15.2049 16.8912C15.4077 16.9634 15.6448 17 15.9079 17C16.622 17 17.3534 16.7838 17.3534 15.1806V11.1366H20.22C20.6508 11.1366 20.9999 10.7913 20.9999 10.3654C21 9.93951 20.6508 9.59421 20.2201 9.59421ZM15.0246 6.8698V9.59417H12.4839L10.6634 6.8698H15.0246ZM6.00622 3.73941L7.05397 5.32768H6.00622V3.73941ZM6.00622 9.59421V6.86984H8.07134L9.86834 9.59421H6.00622ZM15.0246 13.3968L13.5146 11.1366H15.0246V13.3968Z" fill="#172AD2" />
          </svg>
          <span className="product-title-and-price-image-second">{element?.productprice}</span>
        </div>
        <div className="product-title-and-price-grid">
          <div className="date-of-order-product-header text-nowrap">DATE OF ORDER</div>
          <div className="date-of-order-product-header text-nowrap">DATE OF DELIVERY</div>
          <div className="date-of-order-product-header">SELLER</div>
          <div className="date-of-order-product-content">{formatDate(element?.created_at)}</div>
          <div className="date-of-order-product-content">{formatDate(element?.updated_at)}</div>
          <div className="date-of-order-product-content">
            {`${capitalize(element?.seller?.firstname)} ${capitalize(element?.seller?.lastname)}`}
          </div>

        </div>
      </div>
      <div className="inner-routes-card-two-right">
        <div className="inner-routes-card-two-right-first">
          <Button RequestButton buttonName="VIEW DETAILS" clickButton={() => clickEvent(element, 'view')} />
        </div>
        <div className="inner-routes-card-two-right-second">
          <Button RequestButtonAccepted buttonName="PURCHASE" />
        </div>
        <EditDeleteModal deleteAction={deleteAction} editAction={() => clickEvent(element, 'edit')} />
      </div>
    </div>
  );
};

export default InnerRoutesCardTwoSection;

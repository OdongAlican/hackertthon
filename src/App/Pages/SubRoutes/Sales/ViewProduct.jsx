/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';

const ViewProduct = ({ product }) => (
  <div className="card mb-3 w-100" style={{ border: '1px solid #F6F7FE' }}>
    <div className="row no-gutters">
      <div className="col-md-4">
        {!product?.image ? (
          <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
          </svg>
        ) : (<img src={product?.image && product?.image} className="card-img" alt="10X10" style={{ width: '100%', height: '250px' }} />)}
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{product?.productname && product?.productname}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <Link
            className="link-primary"
            style={{ fontSize: '13px', fontWeight: 'bold', textDecoration: 'none' }}
            to="#"
          >
            View more
          </Link>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <div className="d-flex p-2">
          <div className="px-2">
            <Button RequestButton buttonName="Buy" />
          </div>
          <Button cancel buttonName="Cancel" />
        </div>
      </div>
    </div>
  </div>
);

export default ViewProduct;

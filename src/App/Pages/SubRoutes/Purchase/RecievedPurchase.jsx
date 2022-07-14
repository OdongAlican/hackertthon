/* eslint-disable react/prop-types */

import React from 'react';
import { array } from '../../../../constants/index';

const RecievedPurchase = ({ Card }) => (
  array.map(element => (
    <Card
      key={element.id}
      productCardName={element.productCardName}
      productCardSeller={element.productCardSeller}
      productCardDate={element.productCardDate}
      productCardAmount={element.productCardAmount}
      ProductStatus="recieved"
    />
  ))
);

export default RecievedPurchase;

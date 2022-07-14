import React from 'react';
import { array } from '../../../../constants/index';

const PendingPurchases = ({ Card }) => (
  array.map(element => (
    <Card
      key={element.id}
      productCardName={element.productCardName}
      productCardSeller={element.productCardSeller}
      productCardDate={element.productCardDate}
      productCardAmount={element.productCardAmount}
      ProductStatus="pending"
    />
  ))
);

export default PendingPurchases;

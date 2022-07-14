import React from 'react';
import { array } from '../../../../constants/index';

const FailedSales = ({ Card }) => (
  array.map(element => (
    <Card
      key={element.id}
      productCardName={element.productCardName}
      productCardSeller={element.productCardSeller}
      productCardDate={element.productCardDate}
      productCardAmount={element.productCardAmount}
      ProductStatus="failed"
    />
  ))
);

export default FailedSales;

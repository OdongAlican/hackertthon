/* eslint-disable react/prop-types */

import React from 'react';

const RecievedPurchase = ({ Card }) => {
  const array = [
    {
      id: 1,
      productCardName: 'Zara Dress',
      productCardSeller: 'David & Sons Limited',
      productCardDate: '20/19/2021',
      productCardAmount: '$ 2000',
    },
    {
      id: 2,
      productCardName: 'Zara Dress',
      productCardSeller: 'David & Sons Limited',
      productCardDate: '20/19/2021',
      productCardAmount: '$ 2000',
    },
    {
      id: 3,
      productCardName: 'Zara Dress',
      productCardSeller: 'David & Sons Limited',
      productCardDate: '20/19/2021',
      productCardAmount: '$ 2000',
    },
    {
      id: 4,
      productCardName: 'Zara Dress',
      productCardSeller: 'David & Sons Limited',
      productCardDate: '20/19/2021',
      productCardAmount: '$ 2000',
    },
  ];
  return (
    array.map(element => (
      <Card
        key={element.id}
        productCardName={element.productCardName}
        productCardSeller={element.productCardSeller}
        productCardDate={element.productCardDate}
        productCardAmount={element.productCardAmount}
      />
    ))
  );
};

export default RecievedPurchase;

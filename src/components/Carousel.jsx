/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = ({ images }) => (
  <Carousel fade>
    {images && images.map(image => (
      <Carousel.Item>
        <img src={image} className="card-img" alt="10X10" style={{ width: '100%', height: '250px' }} />
      </Carousel.Item>
    ))}
  </Carousel>
);

export default ImageCarousel;

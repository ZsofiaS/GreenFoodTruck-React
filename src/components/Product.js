import React from 'react';

const Product = ({ name, price, img }) => (
  <div role="button" tabIndex={0}>
    <img src={img} alt={name} />
    <p>{name}</p>
    <p>{price}</p>
  </div>
);

export default Product;

import React from 'react';
import '../styles/Product.scss';

const Product = ({ name, price, img }) => (
  <div role="button" tabIndex={0} className="button">
    <div className="image-container">
      <img src={img} alt={name} className="image" />
    </div>
    <p>{name}</p>
    <p>{price}</p>
  </div>
);

export default Product;

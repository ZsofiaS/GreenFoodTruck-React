import React from 'react';
import '../styles/Product.scss';
import PropTypes from 'prop-types';

const Product = ({ name, price, img }) => (
  <div role="button" tabIndex={0} className="button">
    <div className="image-container">
      <img src={img} alt={name} className="image" />
    </div>
    <p>{name}</p>
    <p>{price}</p>
  </div>
);

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
};

export default Product;

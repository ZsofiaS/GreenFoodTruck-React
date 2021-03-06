import React from 'react';
import '../styles/Product.scss';
import PropTypes from 'prop-types';

const Product = ({ name, price, img, addProduct }) => (
  <div role="button" tabIndex={0} className="card" onClick={addProduct}>
    <div className="image-container">
      <img src={img} alt={name} className="image" />
    </div>
    <p>{name}</p>
    <p>£{price}</p>
  </div>
);

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  addProduct: PropTypes.func,
};

export default Product;

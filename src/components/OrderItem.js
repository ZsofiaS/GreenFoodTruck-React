import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OrderItem.scss';

const OrderItem = ({ quantity, name, sum }) => (
  <p>
    {quantity}x {name} £{sum}
  </p>
);

OrderItem.propTypes = {};

export default OrderItem;

import React from 'react';
import PropTypes from 'prop-types';

const OrderItem = ({ quantity, name, sum }) => (
  <p>
    {quantity}x {name} £{sum}
  </p>
);

OrderItem.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
  sum: PropTypes.number,
};

export default OrderItem;

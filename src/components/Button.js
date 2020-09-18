import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ cancelBill, text }) => (
  <div role="button" tabIndex={0} onClick={cancelBill}>
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  cancelBill: PropTypes.func,
};

export default Button;

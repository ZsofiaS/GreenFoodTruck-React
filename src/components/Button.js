/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';

const Button = ({ cancelOrder, text }) => (
  <div role="button" onClick={cancelOrder} className="button">
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  cancelOrder: PropTypes.func,
};

export default Button;

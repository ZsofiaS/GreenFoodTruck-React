/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';

const Button = ({ cancelBill, text }) => (
  <div role="button" onClick={cancelBill} className="button">
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  cancelBill: PropTypes.func,
};

export default Button;

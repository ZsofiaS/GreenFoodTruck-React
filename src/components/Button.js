/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';

const Button = ({ actionOrder, text }) => (
  <div role="button" onClick={actionOrder} className="button">
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  actionOrder: PropTypes.func,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import './Label.style.css';

export const Input = ({ type, size, placeHolderText }) => {
  return (
    <input
      className={['storybook-input', `storybook-input--${size}`].join(' ')}
      type={type}
      placeholder={placeHolderText}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placeHolderText: PropTypes.string.isRequired,
};

Input.defaultProps = {
  size: 'small',
};
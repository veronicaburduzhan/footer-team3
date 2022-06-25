import React from 'react';
import PropTypes from 'prop-types';
import './HeaderSection.styles.css';

export const HeaderSection = ({ title, size, color }) => {
  return (
    <h3
      className={['storybook-header', `storybook-header--${size}`].join(' ')}
      style={color && { color }}
    >
      {title}
    </h3>
  );
};

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

HeaderSection.defaultProps = {
  size: 'small',
  color: '#FFFFFF',
};

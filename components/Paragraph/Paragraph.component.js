import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.style.css';
import { Link } from 'react-router-dom';

export const Paragraph = () => {
  return (
    <div className="text-widget">
      <p className="storybook-text--primary">
        Keep up - to - date with us and receive the latest and greatest blog posts, videos and much more. See our <Link className="linkStyle" to="https://www.kaospilot.dk/privacy-policy/">Privacy Policy</Link> for any nitty-gritty information.
      </p>
    </div>
  );
};

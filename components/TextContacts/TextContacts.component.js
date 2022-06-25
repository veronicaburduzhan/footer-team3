import React from 'react';
import PropTypes from 'prop-types';
import './TextContacts.style.css';

export const TextContacts = () => {
  return (
    <div className="text">
      <div className="text-place">
        <strong>
          <a href="">Kaospilot</a>
        </strong>
        <br />
        <p>Filmbyen 11A, 2nd floor</p>
        <p>8000 Aarhus C</p>
        <p>Denmark</p>
      </div>
      <div>
        <div>
          Tel.:
          <strong>
            <a href="">+45 86 12 95 22</a>
          </strong>
        </div>
        <p>
          Email:
          <strong>
            <a href=""> kaos@kaospilot.dk</a>
          </strong>
        </p>
        <p>CVR nr.: 26039940</p>
      </div>
    </div>
  );
};

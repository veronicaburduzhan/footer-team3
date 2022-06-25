import React from 'react';
import './List.style.css';
import { HeaderSection } from '../Header/HeaderSection.component';

export const List = () => {
  return (
    <div className="text-widget">
      <HeaderSection title="Programs" />

      <ul>
        <li>
          <a href="#" target="_blank">
            Enterprising Leadership Program {`>`}
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Professional Program {`>`}
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Kaospilot+ Berlin {`>`}
          </a>
        </li>
      </ul>
      <HeaderSection title="About" />
      <ul>
        <li>
          <a href="#" target="_blank">
            What is a Kaospilot? {`>`}
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Our History {`>`}
          </a>
        </li>
        <li>
          <a href="#/" target="_blank">
            Blog {`>`}
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Terms & Conditions {`>`}
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Privacy Policy {`>`}
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            COVID Policy {`>`}
          </a>
        </li>
      </ul>
    </div>
  );
};

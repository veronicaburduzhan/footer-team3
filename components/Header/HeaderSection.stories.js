import React from 'react';

import { HeaderSection } from './HeaderSection.component';

export default {
  title: 'Footer/HeaderSection',
  component: HeaderSection.component,
};

const Template = (args) => <HeaderSection {...args} />;

export const Small = Template.bind({});
Small.args = {
  title: 'Get Started',
  size: 'small',
  color: 'green',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  title: 'Get Started',
  color: 'green',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  title: 'Get Started',
  color: 'green',
};

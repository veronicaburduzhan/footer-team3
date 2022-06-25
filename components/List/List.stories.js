import React from 'react';
import { List } from './List.component';

export default {
  title: 'Footer/List',
  component: List.component,
};

const Template = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'List',
};

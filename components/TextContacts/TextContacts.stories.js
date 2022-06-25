import React from 'react';
import { TextContacts } from './TextContacts.component';

export default {
  title: 'Footer/TextContacts',
  component: TextContacts,
};

const Template = (args) => <TextContacts {...args } />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'TextContacts',
};
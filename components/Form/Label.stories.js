import React from 'react';
import { Input } from './Label.component';

export default {
  title: 'Footer/Input',
  component: Input.component,
};
const Templat = (args) => <Input {...args} />;

export const UserName = Templat.bind({});
UserName.args = {
  type: 'text',
  placeHolderText: 'USER NAME',
  size: 'small',
};

export const Password = Templat.bind({});
Password.args = {
  type: 'password',
  placeHolderText: 'Password',
  size: 'small',
};
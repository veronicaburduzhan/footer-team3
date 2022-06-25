import React from 'react';
import { Paragraph } from './Paragraph.component';

export default {
  title: 'Footer/Paragraph',
  component: Paragraph.component,
};
const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Paragraph',
};
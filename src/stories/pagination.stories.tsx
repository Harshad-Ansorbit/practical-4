import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../components/ui/pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,

  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'normal', 'small'],
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  simple: true,
};

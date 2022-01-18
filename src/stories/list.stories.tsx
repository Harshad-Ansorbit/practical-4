import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from '../components/ui/list';

export default {
  title: 'Example/List',
  component: List,

  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'normal', 'small'],
    },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  simple: true,
  title: 'simple',
};

export const Order = Template.bind({});
Order.args = {
  order: true,
  title: 'Order',
};

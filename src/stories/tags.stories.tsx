import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tags from '../components/ui/tags';

export default {
  title: 'Example/Tags',
  component: Tags,

  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'normal', 'small'],
    },
  },
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};

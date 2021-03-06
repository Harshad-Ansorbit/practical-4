import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../components/ui/dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'select primary',
  rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'select secondary',
  rounded: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'select Large',
  rounded: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'select Small',
  rounded: true,
};

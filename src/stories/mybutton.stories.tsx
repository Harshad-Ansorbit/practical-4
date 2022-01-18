import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/ui/button';

export default {
  title: 'Example/mybutton',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'normal', 'small'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
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

export const IconButton = Template.bind({});
IconButton.args = {
  icon: true,
  label: 'button',
};

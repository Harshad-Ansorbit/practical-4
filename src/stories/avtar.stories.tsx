import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avtar from '../components/ui/avtar';

export default {
  title: 'Example/Avtar',
  component: Avtar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avtar>;

const Template: ComponentStory<typeof Avtar> = (args) => <Avtar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
};

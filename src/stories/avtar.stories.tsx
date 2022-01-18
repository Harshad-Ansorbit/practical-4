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

export const FullRounded = Template.bind({});
FullRounded.args = {
  fullrounded: true,
  label: 'Primary',
};

export const SemiRounded = Template.bind({});
SemiRounded.args = {
  semirounded: true,
  label: 'Secondary',
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Dashed = Template.bind({});
Dashed.args = {
  fullrounded: true,
  shadow: true,
  dashed: true,
};

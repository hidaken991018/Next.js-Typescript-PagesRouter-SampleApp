import type { Meta, StoryObj } from '@storybook/react';

import { ServiceLogo } from './ServiceLogo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ServiceLogo> = {
  title: 'Example/ServiceLogo',
  component: ServiceLogo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceLogo>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'ServiceLogo',
  },
};

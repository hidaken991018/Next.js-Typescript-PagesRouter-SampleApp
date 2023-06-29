import type { Meta, StoryObj } from '@storybook/react';

import { TimelineProfile } from './TimelineProfile';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TimelineProfile> = {
  title: 'Example/TimelineProfile',
  component: TimelineProfile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TimelineProfile>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: '東条仗助',
  },
};

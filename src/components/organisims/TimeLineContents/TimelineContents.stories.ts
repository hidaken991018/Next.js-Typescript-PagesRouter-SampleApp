import type { Meta, StoryObj } from '@storybook/react';

import { TimelineContents } from './TimelineContents';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TimelineContents> = {
  title: 'Example/TimelineContents',
  component: TimelineContents,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TimelineContents>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'TimelineContents',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { NoticeButton } from './NoticeButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NoticeButton> = {
  title: 'Example/NoticeButton',
  component: NoticeButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NoticeButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    noticeCount: 1,
  },
};

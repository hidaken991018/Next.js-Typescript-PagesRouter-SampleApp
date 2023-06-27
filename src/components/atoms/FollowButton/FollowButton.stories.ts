import type { Meta, StoryObj } from '@storybook/react';

import { FollowButton } from './FollowButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FollowButton> = {
  title: 'Example/FollowButton',
  component: FollowButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FollowButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const フォロー済み: Story = {
  args: {
    isFollowed: true,
  },
};
export const 未フォロー: Story = {
  args: {
    isFollowed: false,
  },
};

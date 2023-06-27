import type { Meta, StoryObj } from '@storybook/react';

import { SidebarButton } from './SidebarButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SidebarButton> = {
  title: 'Example/SidebarButton',
  component: SidebarButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const タイムライン: Story = {
  args: {
    imgUrl: '/assets/icon_home.png',
    title: 'タイムライン',
  },
};
export const マイページ: Story = {
  args: {
    imgUrl: '/assets/icon_person.png',
    title: 'マイページ',
  },
};
export const 設定: Story = {
  args: {
    imgUrl: '/assets/icon_menu.png',
    title: '設定',
  },
};

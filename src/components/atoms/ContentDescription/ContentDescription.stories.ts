import type { Meta, StoryObj } from '@storybook/react';

import { ContentDescription } from './ContentDescription';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ContentDescription> = {
  title: 'Example/ContentDescription',
  component: ContentDescription,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContentDescription>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const サンプル1: Story = {
  args: {
    title: 'ジョジョの奇妙な冒険　ダイアモンドは砕けない　第一章',
    description:
      'シリーズ累計発行部数1億部を超える「ジョジョの奇妙な冒険」（集英社刊）。連載開始から30年となるジョジョイヤーの今年、ついに実写映画が誕生した！主演のジョジョこと東方仗助を演じるのは山崎賢人。見る者の心を奪う存在感で圧倒的な人気を誇る若手No.1俳優が新境地を開く。共演には',
  },
};
export const サンプル2: Story = {
  args: {
    title: '名探偵コナン　黒鉄の魚影（くろがねのサブマリン）',
    description:
      '東京・八丈島近海に建設された、成果中の警察が持つ防犯カメラを繋ぐための海洋施設『パシフィック・ブイ』。本格稼働に向けて、ヨーロッパの警察組織・ユーロポールが管轄するネットワークと接続するため、世界各国のエンジニアが集結。そこでは顔認証システムを応用した、とある『新技術',
  },
};

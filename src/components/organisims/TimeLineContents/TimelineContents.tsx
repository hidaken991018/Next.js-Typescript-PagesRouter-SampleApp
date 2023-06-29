import { ContentCard } from "@/components/molecules/ContentCard/ContentCard"
import style from "./timeline_contents.module.scss"

const CONTENTS = [
  {
    profile: {
      name: '東条仗助',
      isFollowed: false,
    },
    content: {
      title: 'ジョジョの奇妙な冒険',
      description:
        'シリーズ累計発行部数1億部を超える「ジョジョの奇妙な冒険」（集英社刊）。連載開始から30年となるジョジョイヤーの今年、ついに実写映画が誕生した！主演のジョジョこと東方仗助を演じるのは山崎賢人。見る者の心を奪う存在感で圧倒的な人気を誇る若手No',
      image: '/assets/content_image.png',
    },
  }, {
    profile: {
      name: '江戸川コナン',
      isFollowed: true,
    },
    content: {
      title: '名探偵コナン　黒鉄の魚影（くろがねのサブマリン）',
      description:
        '東京・八丈島近海に建設された、成果中の警察が持つ防犯カメラを繋ぐための海洋施設『パシフィック・ブイ』。本格稼働に向けて、ヨーロッパの警察組織・ユーロポールが管轄するネットワークと接続するため、世界各国のエンジニアが集結。そこでは顔認証システムを応用した、とある『新技術',
      image: '/assets/content_image.png',
    },
  }]
let GENERATED_CONTENTS: any = []
for (let i = 0; i <= 7; i++) {
  GENERATED_CONTENTS = [...GENERATED_CONTENTS, CONTENTS[i % 2 === 0 ? 0 : 1]]
}
export const TimelineContents = () => {
  return (
    <div className={style.timeline_contents}>
      {GENERATED_CONTENTS.map((content: any, index: number) => (
        <ContentCard key={index} profile={content.profile} content={content.content} />
      ))}
    </div>
  )
}
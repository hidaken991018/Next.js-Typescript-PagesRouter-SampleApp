import { ContentDescription } from "@/components/atoms/ContentDescription/ContentDescription"
import { FollowButton } from "@/components/atoms/FollowButton/FollowButton"
import { TimelineProfile } from "@/components/atoms/TimelineProfile/TimelineProfile"
import Image from "next/image"
import style from "./content_card.module.scss"
type Props = {
  profile: {
    name: string,
    isFollowed: boolean,
  },
  content: {
    title: string,
    description: string,
    image: string,
  }
  onclick: () => void;
}

export const ContentCard = (props: Props) => {
  const OpenContentModal = () => {
    alert('モーダルを開く')
  }
  return (
    <div className={style.content}>
      <div className={style.content_header}>
        <TimelineProfile name={props.profile.name} onclick={props.onclick} />
        <FollowButton isFollowed={props.profile.isFollowed} />
      </div>
      <div className={style.image_wrapper} onClick={OpenContentModal}>
        <Image src={props.content.image} alt={props.content.title} width={600} height={260} />
      </div>
      <div className={style.content_deescription} onClick={OpenContentModal}>
        <ContentDescription title={props.content.title} description={props.content.description} />
      </div>
    </div>
  )
}

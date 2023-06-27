import Image from "next/image";
import style from "./tileline_top_profile.module.scss";

type Props = {
  name: string;
}

export const TimelineTopProfile = (props: Props) => {
  return (
    <div className={style.profile_wrapper}>
      <Image src="/assets/icon_account_circle.png" alt="profile" width={50} height={50} />
      <p className={style.name}>{props.name}</p>
    </div>
  )
}
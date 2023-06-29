import Image from "next/image";
import style from "./tileline_profile.module.scss";

type Props = {
  name: string;
  onclick: () => void;
}

export const TimelineProfile = (props: Props) => {
  return (
    <div className={style.profile_wrapper} onClick={props.onclick}>
      <Image src="/assets/icon_account_circle.png" alt="profile" width={50} height={50} />
      <p className={style.name}>{props.name}</p>
    </div>
  )
}
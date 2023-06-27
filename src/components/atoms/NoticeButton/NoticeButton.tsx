import Image from "next/image";
import style from "./notice_button.module.scss";

type props = {
  noticeCount: number;
}

export const NoticeButton = (props: props) => {
  return (
    <div className={style.noticeWrapper}>
      <div className={style.notice}>{props.noticeCount}</div>
      <Image src="/assets/icon_notification.png" alt="notice" width={40} height={40} />
    </div>
  )
}
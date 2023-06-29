import Image from "next/image";
import style from "./notice_button.module.scss";
import { useRouter } from "next/router";

type props = {
  noticeCount: number;
}

export const NoticeButton = (props: props) => {
  const router = useRouter()
  return (
    <div className={style.noticeWrapper} onClick={() => router.push("/notice")}>
      {props.noticeCount !== 0 && <div className={style.notice}>{props.noticeCount}</div>}
      <Image src="/assets/icon_notification.png" alt="notice" width={40} height={40} />
    </div>
  )
}
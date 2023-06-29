import { ServiceLogo } from "@/components/atoms/ServiceLogo/ServiceLogo"
import style from "./header.module.scss"
import { NoticeButton } from "@/components/atoms/NoticeButton/NoticeButton"

export const Header = () => {
  // noticeCountはAPIから取得する
  return (
    <div className={style.header}>
      <ServiceLogo />
      <NoticeButton noticeCount={0} />
    </div>
  )
}
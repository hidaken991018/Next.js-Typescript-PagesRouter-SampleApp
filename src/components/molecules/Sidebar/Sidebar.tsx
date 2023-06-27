import { SidebarButton } from "@/components/atoms/SidebarButton/SidebarButton"
import style from "./sidebar.module.scss"
import { useRouter } from "next/router"

export const Sidebar = () => {
  const SIDEBAR_SETTING = [
    {
      imgUrl: '/assets/icon_home.png',
      title: 'タイムライン',
      location: "/"
    }, {
      imgUrl: '/assets/icon_person.png',
      title: 'マイページ',
      location: "/mypage"
    }, {
      imgUrl: '/assets/icon_menu.png',
      title: '設定',
      location: "/setting"
    },
  ]

  const router = useRouter()


  return (
    <div>
      <div className={style.sidebar}>
        {SIDEBAR_SETTING.map((setting, index) => {
          return (
            <SidebarButton
              key={index}
              imgUrl={setting.imgUrl}
              title={setting.title}
              onclick={() => router.push(setting.location)}
            />
          )
        })}
      </div>
    </div>
  )
}
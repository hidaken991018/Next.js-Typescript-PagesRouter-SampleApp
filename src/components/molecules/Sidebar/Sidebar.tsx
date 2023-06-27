import { SidebarButton } from "@/components/atoms/SidebarButton/SidebarButton"
import style from "./sidebar.module.scss"

export const Sidebar = () => {
  const SIDEBAR_SETTING = [
    {
      imgUrl: '/assets/icon_home.png',
      title: 'タイムライン',
    }, {
      imgUrl: '/assets/icon_person.png',
      title: 'マイページ',
    }, {
      imgUrl: '/assets/icon_menu.png',
      title: '設定',
    },
  ]



  return (
    <div>
      <div className={style.sidebar}>
        {SIDEBAR_SETTING.map((setting, index) => {
          return (
            <SidebarButton
              key={index}
              imgUrl={setting.imgUrl}
              title={setting.title}
            />
          )
        })}
      </div>
    </div>
  )
}
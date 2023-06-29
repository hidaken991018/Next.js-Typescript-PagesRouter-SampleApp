import { useState } from "react";
import style from "./follow_button.module.scss";

type Props = {
  isFollowed: boolean; // フォロー済みかどうか
  disabled?: boolean; // ボタンを押せないようにするかどうか
}

export const FollowButton = (props: Props) => {

  const [isFollowed, setIsFollowed] = useState(props.isFollowed)

  const ClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsFollowed(!isFollowed)
  }
  return (
    <button className={`${style.follow_button} ${isFollowed && style.followed}`} onClick={ClickHandle} disabled={props.disabled}>
      {isFollowed ? "フォロー中" : "フォロー"}
    </button>
  )
} 
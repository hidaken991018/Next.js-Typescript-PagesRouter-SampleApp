import style from "./follow_button.module.scss";

type Props = {
  isFollowed: boolean; // フォロー済みかどうか
  disabled?: boolean; // ボタンを押せないようにするかどうか
}

export const FollowButton = (props: Props) => {
  return (
    <button className={`${style.follow_button} ${props.isFollowed && style.followed}`} disabled={props.disabled}>
      {props.isFollowed ? "フォロー中" : "フォロー"}
    </button>
  )
} 
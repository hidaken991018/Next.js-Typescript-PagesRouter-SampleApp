import style from './content_description.module.scss'

type Props = {
  title: string,
  description: string;
}

export const ContentDescription = (props: Props) => {
  return (
    <div className={style.content}>
      <p className={style.title}>{props.title}</p>
      <p className={style.description}> {props.description}</p>
    </div>
  )
}
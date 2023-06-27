import Image from "next/image";
import style from "./sidebar_button.module.scss";

type Props = {
  key: number;
  imgUrl: string;
  title: string;
};

export const SidebarButton = (props: Props) => {
  return (
    <div className={style.sidebar_button}>
      <div className={style.buttonWrapper} key={props.key}>
        <Image src={props.imgUrl} alt={props.title} width={50} height={50} />
        <p className={style.name}>{props.title}</p>
      </div>
      <div className={style.underline}></div>
    </div>
  )
}
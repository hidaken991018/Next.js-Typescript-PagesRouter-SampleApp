import { useRouter } from "next/router";
import style from "./service_logo.module.scss"

export const ServiceLogo = () => {
  const router = useRouter()
  return (
    <p className={style.logo} onClick={() => router.push("/")}>Next Sample Project</p>
  );
}
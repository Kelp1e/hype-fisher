import Marquee from "react-fast-marquee"
import { useTranslation } from "react-i18next"

export const News = () => {
  const { t } = useTranslation()

  return (
    <div className="flex h-[80rem] items-center justify-center overflow-hidden bg-orange font-kemco">
      <Marquee autoFill className="flex gap-[10rem]" speed={25}>
        <div className="mx-[20rem]">{t("news.adventures")}</div>
        <div className="mx-[20rem]">{t("news.multiplayer")}</div>
      </Marquee>
    </div>
  )
}

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import { Icon } from "~/shared/ui"

export const Home = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className="flex h-screen items-center justify-center gap-[10rem]">
      <div className="flex flex-col gap-[10rem] items-center">
        <img src="/images/logo.png" alt="logo" className="w-[500rem]" />
        <div className="flex items-center gap-[5rem]">
          <Icon.OrangeFish className="w-[128rem]" />
          <Icon.GreenFish className="w-[128rem]" />
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
          }}
          className="bg-blue-500 p-[10rem] text-white"
        >
          {i18n.language} {t("start")}
        </motion.button>
      </div>
    </div>
  )
}

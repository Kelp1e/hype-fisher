import { motion } from "framer-motion"

import { LINK } from "~/shared/lib"
import {
  ChangeLanguageListbox,
  Icon,
  StartFishingButton,
  ToggleMusicCheckbox,
} from "~/shared/ui"

import { Background } from "./ui"

export const Start = () => {
  return (
    <Background className="flex h-fit min-h-[100dvh] flex-1 py-[20rem]">
      <div className="max-container mx-auto flex flex-col">
        <header className="relative z-[1] flex w-full items-center justify-between gap-[12rem]">
          <div className="flex items-center gap-[12rem]">
            <ChangeLanguageListbox />
            <ToggleMusicCheckbox />
          </div>
          <div className="flex items-center gap-[12rem]">
            <a
              href={LINK.TWITTER}
              target="_blank"
              className="relative hover:bottom-[1rem] pointer-coarse:hover:bottom-0"
            >
              <Icon.Twitter className="h-[24rem]" />
            </a>
            <a
              href={LINK.TELEGRAM}
              target="_blank"
              className="relative hover:bottom-[1rem] pointer-coarse:hover:bottom-0"
            >
              <Icon.Telegram className="h-[24rem]" />
            </a>
          </div>
        </header>
        <div className="relative flex flex-1 lg:top-[-10%] lg:w-1/3 lg:items-center">
          <div className="flex w-full flex-1 flex-col items-center justify-between gap-[40rem] lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: "-50rem" }}
              animate={{ opacity: 1, y: 0, transition: { type: "spring" } }}
              transition={{ duration: 0.5, delay: 0 }}
              className="mt-[64rem] max-w-[333rem] lg:max-w-full"
            >
              <img
                src="/images/logo.png"
                alt="hype hisher logo"
                className="relative block w-full animate-flying-y"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "20rem" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  delay: 0.3,
                },
              }}
              className="mb-[50rem] lg:mb-0"
            >
              <StartFishingButton />
            </motion.div>
          </div>
        </div>
      </div>
    </Background>
  )
}

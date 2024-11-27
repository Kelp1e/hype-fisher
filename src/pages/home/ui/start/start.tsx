import { ChangeLanguageListbox } from "~/feautures/change-language/ui"
import { StartFishingButton } from "~/feautures/start-fishing/ui"
import { ToggleMusicCheckbox } from "~/feautures/toggle-music/ui"

import { LINK } from "~/shared/lib"
import { Icon } from "~/shared/ui"

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
              className="pointer-coarse:hover:bottom-0 relative hover:bottom-[1rem]"
            >
              <Icon.Twitter className="h-[24rem]" />
            </a>
            <a
              href={LINK.TELEGRAM}
              target="_blank"
              className="pointer-coarse:hover:bottom-0 relative hover:bottom-[1rem]"
            >
              <Icon.Telegram className="h-[24rem]" />
            </a>
          </div>
        </header>
        <div className="relative flex flex-1 lg:top-[-10%] lg:w-1/3 lg:items-center">
          <div className="flex w-full flex-1 flex-col items-center justify-between gap-[40rem] lg:justify-start">
            <img
              src="/images/logo.png"
              alt="hype hisher logo"
              className="relative mt-[64rem] block w-full max-w-[333rem] animate-flying-y lg:max-w-full"
            />
            <StartFishingButton />
          </div>
        </div>
      </div>
    </Background>
  )
}

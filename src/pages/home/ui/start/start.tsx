import { ChangeLanguageListbox } from "~/feautures/change-language/ui"
import { StartFishingButton } from "~/feautures/start-fishing/ui"

import { LINK } from "~/shared/lib"
import { Icon } from "~/shared/ui"

import { Background } from "./ui"

export const Start = () => {
  return (
    <Background className="flex h-fit min-h-[100dvh] flex-1 py-[20rem]">
      <div className="max-container mx-auto flex flex-col">
        <header className="flex w-full items-center justify-between gap-[12rem]">
          <ChangeLanguageListbox />
          <div className="flex items-center gap-[12rem]">
            <a href={LINK.TWITTER}>
              <Icon.Twitter className="h-[24rem]" />
            </a>
            <a href={LINK.TELEGRAM}>
              <Icon.Telegram className="h-[24rem]" />
            </a>
          </div>
        </header>
        <div className="flex flex-1 lg:w-1/3">
          <div className="flex w-full flex-1 flex-col items-center justify-between gap-[40rem] lg:justify-start">
            <img
              src="/images/logo.png"
              alt="hype hisher logo"
              className="mt-[64rem] w-full max-w-[333rem] lg:max-w-full"
            />
            <StartFishingButton />
          </div>
        </div>
      </div>
    </Background>
  )
}

import { ChangeLanguageListbox } from "~/feautures/change-language/ui"

import { LINK } from "~/shared/lib"
import { Button, Icon } from "~/shared/ui"

export const Home = () => {
  return (
    <div>
      <div className="flex h-[100dvh] flex-1 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat py-[20rem]">
        <div className="max-container mx-auto flex flex-col">
          <header className="flex w-full items-center justify-between gap-[12rem]">
            <ChangeLanguageListbox />
            <div className="flex items-center gap-[12rem]">
              <a href={LINK.TWITTER} className="">
                <Icon.Twitter className="h-[24rem]" />
              </a>
              <a href={LINK.TELEGRAM} className="">
                <Icon.Telegram className="h-[24rem]" />
              </a>
            </div>
          </header>
          <div className="flex flex-1">
            <div className="flex w-full flex-1 flex-col items-center justify-between">
              <img
                src="images/logo.png"
                alt="hype hisher logo"
                className="mt-[64rem] w-full max-w-[333rem]"
              />
              <Button
                as="a"
                href={LINK.TELEGRAM}
                classNames={{ content: "text-center" }}
              >
                <div className="flex items-center gap-[4rem]">
                  <Icon.PinkFish className="h-[10rem] rotate-[-55deg]" />
                  <span>Start fishing</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

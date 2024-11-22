import { ChangeLanguageListbox } from "~/feautures/change-language/ui"

import { LINK } from "~/shared/lib"
import { Button } from "~/shared/ui"

export const Home = () => {
  return (
    <div className="flex h-[100dvh] flex-1 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat py-[20rem]">
      <div className="max-container mx-auto flex flex-col">
        <header className="flex w-full items-center justify-between gap-[12rem]">
          <ChangeLanguageListbox />
          <div className="flex items-center gap-[12rem]">
            <a href={LINK.TWITTER} className="size-[24rem] bg-blue-400" />
            <a href={LINK.TELEGRAM} className="size-[24rem] bg-blue-400" />
          </div>
        </header>
        <div className="flex flex-1">
          <div className="flex w-full flex-1 flex-col items-center justify-between">
            <img
              src="images/logo.png"
              alt="hype hisher logo"
              className="mt-[64rem] w-full max-w-[333rem]"
            />
            <Button>Start fishing</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useTranslation } from "react-i18next"
import { ChangeLanguageListbox } from "~/feautures/change-language/ui"

import { Button } from "~/shared/ui"

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="h-screen bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-container mx-auto h-full">
          <div className="flex h-full items-center justify-center">
            <div className="gap-[10rem]l flex flex-col items-center">
              <img src="/images/logo.png" alt="logo" className="w-[560rem]" />
              <Button>{t("start")}</Button>
            </div>
            <ChangeLanguageListbox />
          </div>
        </div>
      </div>
    </div>
  )
}

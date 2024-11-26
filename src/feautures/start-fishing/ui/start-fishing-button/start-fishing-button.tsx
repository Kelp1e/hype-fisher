import { useTranslation } from "react-i18next"

import { cn, LINK } from "~/shared/lib"
import { Button, Icon, Text } from "~/shared/ui"

import { StartFishingButtonProps } from "./start-fishing-button.props.ts"

export const StartFishingButton = (props: StartFishingButtonProps) => {
  const { className } = props

  const { t } = useTranslation()

  return (
    <Button as="a" href={LINK.TELEGRAM_MINI_APP} className={cn("", className)}>
      <div className="flex items-center gap-[4rem]">
        <Icon.PinkFish className="min-w-[22rem] max-w-[22rem] rotate-[-55deg]" />
        <Text shadow className="whitespace-nowrap text-center">
          {t("startFishing")}
        </Text>
      </div>
    </Button>
  )
}

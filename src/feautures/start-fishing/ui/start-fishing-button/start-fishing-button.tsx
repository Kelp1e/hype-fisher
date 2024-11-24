import { cn, LINK } from "~/shared/lib"
import { Button, Icon, Text } from "~/shared/ui"

import { StartFishingButtonProps } from "./start-fishing-button.props.ts"

export const StartFishingButton = (props: StartFishingButtonProps) => {
  const { className } = props

  return (
    <Button as="a" href={LINK.TELEGRAM} className={cn("", className)}>
      <div className="flex items-center gap-[4rem]">
        <Icon.PinkFish className="min-w-[22rem] max-w-[22rem] rotate-[-55deg]" />
        <Text shadow className="whitespace-nowrap text-center">
          Start fishing
        </Text>
      </div>
    </Button>
  )
}

import React from "react"

import { Checkbox } from "@headlessui/react"

import { Corners, Icon } from "~/shared/ui"

export const ToggleMusicCheckbox = () => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(false)

  const SoundIcon = isEnabled ? Icon.SoundOn : Icon.SoundOff

  return (
    <Corners
      as={Checkbox}
      checked={isEnabled}
      onChange={setIsEnabled}
      size="4rem"
      className="group/checkbox size-[30rem] cursor-pointer bg-[#DF7434] p-[4rem] hover:bg-orange"
    >
      <div className="flex h-full items-center justify-center bg-orange">
        <SoundIcon className="h-[14rem] text-white" />
      </div>
    </Corners>
  )
}

import React from "react"

import { Checkbox } from "@headlessui/react"

import { sound } from "~/shared/lib"
import { Corners, Icon } from "~/shared/ui"

export const ToggleMusicCheckbox = () => {
  const [audio] = React.useState(new Audio("/audios/music.mp3"))

  const [isEnabled, setIsEnabled] = React.useState<boolean>(false)

  React.useEffect(() => {
    audio.loop = true
  }, [audio])

  const SoundIcon = isEnabled ? Icon.SoundOn : Icon.SoundOff

  const handleOnChange = (checked: boolean) => {
    setIsEnabled(checked)

    if (checked) {
      audio?.play()
    } else {
      audio?.pause()
    }
  }

  return (
    <>
      <Corners
        as={Checkbox}
        checked={isEnabled}
        onChange={handleOnChange}
        onClick={() => {
          sound("click")
        }}
        size="4rem"
        className="group/checkbox relative size-[30rem] cursor-pointer bg-[#DF7434] pointer-coarse:hover:bottom-0 p-[4rem] hover:bottom-[2rem] hover:bg-orange"
      >
        <div className="flex h-full items-center justify-center bg-orange">
          <SoundIcon className="h-[14rem] text-white" />
        </div>
      </Corners>
    </>
  )
}

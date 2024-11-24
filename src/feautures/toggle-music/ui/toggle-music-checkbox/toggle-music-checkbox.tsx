import React from "react"

import { Checkbox } from "@headlessui/react"

import { sound } from "~/shared/lib/sounds.ts"
import { Corners, Icon } from "~/shared/ui"

export const ToggleMusicCheckbox = () => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(false)

  const audioRef = React.useRef<HTMLAudioElement>(null)

  const SoundIcon = isEnabled ? Icon.SoundOn : Icon.SoundOff

  const handleOnChange = (checked: boolean) => {
    setIsEnabled(checked)

    if (checked) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
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
        className="group/checkbox size-[30rem] cursor-pointer bg-[#DF7434] p-[4rem] hover:bg-orange"
      >
        <div className="flex h-full items-center justify-center bg-orange">
          <SoundIcon className="h-[14rem] text-white" />
        </div>
      </Corners>
      <audio src="/audios/music.mp3" ref={audioRef} loop></audio>
    </>
  )
}

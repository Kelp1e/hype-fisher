import { Checkbox } from "@headlessui/react"

import { useSoundContext } from "~/shared/lib"
import { Corners, Icon } from "~/shared/ui"

export const ToggleMusicCheckbox = () => {
  const sound = useSoundContext()

  const SoundIcon = sound?.isEnabled ? Icon.SoundOn : Icon.SoundOff

  return (
    <>
      <Corners
        as={Checkbox}
        checked={sound?.isEnabled}
        onChange={sound?.toggle}
        onClick={() => {
          sound?.play("click")
        }}
        size="4rem"
        className="group/checkbox relative size-[30rem] cursor-pointer bg-[#DF7434] p-[4rem] hover:bottom-[2rem] hover:bg-orange pointer-coarse:hover:bottom-0"
      >
        <div className="flex h-full items-center justify-center bg-orange">
          <SoundIcon className="h-[14rem] text-white" />
        </div>
      </Corners>
    </>
  )
}

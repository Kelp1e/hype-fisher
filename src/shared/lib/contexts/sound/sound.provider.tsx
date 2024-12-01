import React, { PropsWithChildren } from "react"

import { SoundContext } from "./sound.context.ts"

export const SoundContextProvider = (props: PropsWithChildren) => {
  const { children } = props

  const [isEnabled, setIsEnabled] = React.useState<boolean>(false)

  const [music] = React.useState(new Audio("/audios/music.mp3"))

  const [click] = React.useState(new Audio("/sounds/click.mp3"))
  const [openChest] = React.useState(new Audio("/sounds/open-chest.mp3"))

  const enable = () => {
    setIsEnabled(true)

    music.loop = true
    music.play()
  }

  const disable = () => {
    setIsEnabled(false)

    music.pause()
  }

  const toggle = () => {
    if (isEnabled) {
      disable()
    } else {
      enable()
    }
  }

  const play = (type: "click" | "hover" | "openChest") => {
    if (!isEnabled && type === "openChest") {
      return
    }

    const audio = {
      click: click,
      hover: click,
      openChest: openChest,
    }[type]

    const volume = {
      click: 1,
      hover: 0.1,
      openChest: 0.5,
    }[type]

    audio.currentTime = 0

    audio.volume = volume

    audio.play()
  }

  return (
    <SoundContext.Provider
      value={{
        isEnabled: isEnabled,
        enable: enable,
        disable: disable,
        toggle: toggle,
        play: play,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

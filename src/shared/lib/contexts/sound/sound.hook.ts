import React from "react"

import { SoundContext } from "./sound.context.ts"

export const useSoundContext = () => {
  const context = React.useContext(SoundContext)

  if (!context) {
    return
  }

  return context
}

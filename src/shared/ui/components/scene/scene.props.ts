import React from "react"

import { Video } from "~/shared/ui"

export type SceneProps = React.ComponentProps<typeof Video> & {
  src?: string
}

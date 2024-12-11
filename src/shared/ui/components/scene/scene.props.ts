import React from "react"

import { AutoVideo } from "~/shared/ui"

export type SceneProps = React.ComponentProps<typeof AutoVideo> & {
  src?: string
}

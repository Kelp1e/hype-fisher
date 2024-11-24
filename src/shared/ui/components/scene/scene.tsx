import { cn } from "~/shared/lib"
import { Video } from "~/shared/ui"

import { SceneProps } from "./scene.props.ts"

export const Scene = (props: SceneProps) => {
  const { src, className, children } = props

  return (
    <div className={cn("relative", className)}>
      <Video
        src={src}
        className="absolute inset-0 z-[-1] h-full w-full object-cover"
      />
      {children}
    </div>
  )
}

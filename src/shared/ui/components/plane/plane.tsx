import { cn } from "~/shared/lib"

import { PlaneProps } from "./plane.props.ts"

export const Plane = (props: PlaneProps) => {
  const { className } = props

  return (
    <div className={cn("", className)}>
      <img src="/images/plane.png" alt="plane" className="h-full" />
    </div>
  )
}

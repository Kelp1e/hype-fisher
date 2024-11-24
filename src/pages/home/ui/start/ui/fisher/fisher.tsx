import { cn } from "~/shared/lib"

import { FisherProps } from "./fisher.props.ts"

export const Fisher = (props: FisherProps) => {
  const { value = "boy", className } = props

  const imageUrl = {
    boy: "/images/pepe/boy.png",
    girl: "/images/pepe/girl.png",
    old: "/images/pepe/old.png",
  }[value]

  return (
    <div className={cn("relative", className)}>
      <img
        src={imageUrl}
        alt={`fisher-${value}`}
        className="h-full w-full object-contain object-bottom"
      />
    </div>
  )
}

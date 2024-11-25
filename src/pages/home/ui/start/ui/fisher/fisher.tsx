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
    <div className={cn("relative w-fit", className)}>
      <div className="h-full w-full">
        <img
          src={imageUrl}
          alt={`fisher-${value}`}
          className="animate-flying-y relative h-full w-full object-contain object-bottom"
        />
      </div>
      <div className="absolute inset-x-[10%] bottom-0">
        <img
          src="/images/wave.png"
          alt="wave"
          className="animate-flying-x h-full w-full"
        />
      </div>
    </div>
  )
}

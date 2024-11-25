import React from "react"

import { cn, sound } from "~/shared/lib"

import { Fisher } from "../fisher"
import { BackgroundProps } from "./background.props.ts"

export const Background = (props: BackgroundProps) => {
  const { className, children } = props

  const [fisher, setFisher] =
    React.useState<React.ComponentProps<typeof Fisher>["value"]>("boy")

  const onFisherClick = () => {
    setFisher((prev) =>
      prev === "boy" ? "girl" : prev === "girl" ? "old" : "boy"
    )

    sound("click")
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat",
        className
      )}
    >
      <div className="absolute inset-0">
        <div className="hidden h-full items-end justify-end lg:flex">
          <div
            className="h-full max-h-[85%] max-w-[50%] cursor-pointer"
            onClick={onFisherClick}
          >
            <Fisher value={fisher} className="h-full" />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

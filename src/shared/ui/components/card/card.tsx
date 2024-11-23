import { cn } from "~/shared/lib"
import { Corners } from "~/shared/ui"

import { CardProps } from "./card.props.ts"

export const Card = (props: CardProps) => {
  const { className, classNames, children } = props

  return (
    <Corners
      as="div"
      size="8rem"
      className={cn("relative bg-red-400 p-[2rem]", className)}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-[10rem] bg-[#4C4A68]",
          classNames?.top
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-[10rem] bg-[#1C1B37]",
          classNames?.right
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-[10rem] bg-[#1C1B37]",
          classNames?.bottom
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-[10rem] bg-[#4C4A68]",
          classNames?.left
        )}
      />
      <Corners
        as="div"
        size="8rem"
        className={cn("h-full bg-[#222044] p-[8rem]", classNames?.content)}
      >
        {children}
      </Corners>
    </Corners>
  )
}

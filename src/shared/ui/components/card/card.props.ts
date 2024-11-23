import { PropsWithChildren } from "react"

export type CardProps = {
  className?: string
  classNames?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
    border?: string
    content?: string
  }
} & PropsWithChildren

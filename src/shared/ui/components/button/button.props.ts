import React from "react"

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  classNames?: {
    content?: string
    glare?: string
    top?: string
    bottom?: string
    shadow?: string
  }
}

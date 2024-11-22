import React from "react"

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  classNames?: {
    content?: string
  }
}

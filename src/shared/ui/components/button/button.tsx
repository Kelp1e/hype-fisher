import React from "react"

import { PolyRef, PolyRefComponent, PolyRefProps } from "~/shared/ui"

import { ButtonProps } from "./button.props.ts"

export const Button = React.forwardRef<never>(
  <E extends React.ElementType = "button">(
    props: PolyRefProps<E, ButtonProps>,
    ref?: PolyRef<E>
  ) => {
    const { as: Component = "button", children } = props

    return <Component ref={ref}>{children}</Component>
  }
) as PolyRefComponent<"button", ButtonProps>

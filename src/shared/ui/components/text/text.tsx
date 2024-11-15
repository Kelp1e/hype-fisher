import React from "react"

import { PolyRef, PolyRefComponent, PolyRefProps } from "~/shared/ui"

import { TextProps } from "./text.props.ts"

export const Text = React.forwardRef<never>(
  <E extends React.ElementType = "span">(
    props: PolyRefProps<E, TextProps>,
    ref?: PolyRef<E>
  ) => {
    const { as: Component = "span", children } = props

    return <Component ref={ref}>{children}</Component>
  }
) as PolyRefComponent<"span", TextProps>

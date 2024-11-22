import React from "react"

import { cn } from "~/shared/lib"
import { PolyRef, PolyRefComponent, PolyRefProps } from "~/shared/ui"

import { TextProps } from "./text.props.ts"

export const Text = React.forwardRef<never>(
  <E extends React.ElementType = "span">(
    props: PolyRefProps<E, TextProps>,
    ref?: PolyRef<E>,
  ) => {
    const {
      as: Component = "span",
      shadow = false,
      className,
      classNames,
      children,
      ...rest
    } = props

    return (
      <Component ref={ref} className={cn("relative", className)} {...rest}>
        {shadow && (
          <div
            className={cn(
              "absolute bottom-[-1rem] left-[-1rem] z-[-1] text-black",
              classNames?.shadow,
            )}
          >
            {children}
          </div>
        )}
        {children}
      </Component>
    )
  },
) as PolyRefComponent<"span", TextProps>

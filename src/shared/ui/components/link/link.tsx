import React from "react"

import { cn } from "~/shared/lib"
import { PolyRef, PolyRefComponent, PolyRefProps } from "~/shared/ui"

import { LinkProps } from "./link.props.ts"

export const Link = React.forwardRef<never>(
  <E extends React.ElementType = "a">(
    props: PolyRefProps<E, LinkProps>,
    ref?: PolyRef<E>
  ) => {
    const { as: Component = "a", className, children, ...rest } = props

    return (
      <Component
        ref={ref}
        className={cn(
          "border-b-[2rem] border-b-transparent font-kemco leading-none hover:border-b-orange",
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    )
  }
) as PolyRefComponent<"a", LinkProps>

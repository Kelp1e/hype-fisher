import React from "react"

import { cn } from "~/shared/lib"
import { PolyRef, PolyRefComponent, PolyRefProps } from "~/shared/ui"

import { CornersProps } from "./corners.props.ts"
import { getCornersPolygon } from "./corners.utils.ts"

export const Corners = React.forwardRef<never>(
  <E extends React.ElementType = "div">(
    props: PolyRefProps<E, CornersProps>,
    ref?: PolyRef<E>
  ) => {
    const {
      as: Component = "div",
      size = "4rem",
      style,
      className,
      children,
      ...rest
    } = props

    return (
      <Component
        ref={ref}
        style={{
          ...style,
          clipPath: `polygon(${getCornersPolygon(size)})`,
        }}
        className={cn("bg-white", className)}
        {...rest}
      >
        {children}
      </Component>
    )
  }
) as PolyRefComponent<"div", CornersProps>

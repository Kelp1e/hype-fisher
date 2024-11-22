import React from "react"

import { cn } from "~/shared/lib"
import { PolyRef, PolyRefComponent, PolyRefProps } from "~/shared/ui"
import { getCornersPolygon } from "~/shared/ui/components/corners/corners.utils.ts"

import { CornersProps } from "./corners.props.ts"

export const Corners = React.forwardRef<never>(
  <E extends React.ElementType = "div">(
    props: PolyRefProps<E, CornersProps>,
    ref?: PolyRef<E>
  ) => {
    const {
      as: Component = "div",
      size = 4,
      style,
      className,
      classNames,
      children,
    } = props

    return (
      <Component
        ref={ref}
        style={{
          ...style,
          padding: `${size}rem`,
          clipPath: `polygon(${getCornersPolygon(`${size}rem`)})`,
        }}
        className={cn("bg-white", classNames?.border)}
      >
        <div className={cn("", className)}>{children}</div>
      </Component>
    )
  }
) as PolyRefComponent<"div", CornersProps>

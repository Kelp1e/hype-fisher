import React from "react"

import { cn } from "~/shared/lib"
import { PolyRef, PolyRefComponent, PolyRefProps, Text } from "~/shared/ui"

import styles from "./button.module.css"
import { ButtonProps } from "./button.props.ts"

export const Button = React.forwardRef<never>(
  <E extends React.ElementType = "button">(
    props: PolyRefProps<E, ButtonProps>,
    ref?: PolyRef<E>
  ) => {
    const {
      as: Component = "button",
      className,
      classNames,
      children,
      ...rest
    } = props

    return (
      <Component
        ref={ref}
        {...rest}
        className={cn(
          "bg-green-dark relative h-[50rem] p-[4rem] text-white",
          styles.polygonWrapper,
          className
        )}
      >
        <div className={cn("relative h-full", styles.polygonInner)}>
          <div
            className={cn(
              "absolute inset-x-0 bottom-1/2 top-0 z-[-1] bg-[#2E9F45]",
              classNames?.top
            )}
          />
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 top-1/2 z-[-1] bg-[#569F37]",
              classNames?.bottom
            )}
          />
          <div
            className={cn(
              "bg-green relative flex h-full items-center justify-center px-[50rem]",
              styles.polygonContent,
              classNames?.content
            )}
          >
            <div
              className={cn(
                "absolute left-[12rem] top-[4rem] h-[12rem] w-[16rem] bg-white",
                styles.polygonGlare,
                classNames?.glare
              )}
            />
            <Text
              shadow
              classNames={{
                shadow: classNames?.shadow,
              }}
            >
              {children}
            </Text>
          </div>
        </div>
      </Component>
    )
  }
) as PolyRefComponent<"button", ButtonProps>

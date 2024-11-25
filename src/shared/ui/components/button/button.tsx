import React from "react"

import { cn, sound } from "~/shared/lib"
import { Icon, PolyRef, PolyRefComponent, PolyRefProps } from "~/shared/ui"

import { ButtonProps } from "./button.props.ts"

import styles from "./button.module.css"

export const Button = React.forwardRef<never>(
  <E extends React.ElementType = "button">(
    props: PolyRefProps<E, ButtonProps>,
    ref?: PolyRef<E>
  ) => {
    const {
      as: Component = "button",
      className,
      classNames,
      onClick,
      children,
      ...rest
    } = props

    return (
      <Component
        ref={ref}
        {...rest}
        onClick={() => {
          sound("click")
          onClick?.()
        }}
        className={cn(
          "group/button relative min-h-[50rem] font-kemco text-white hover:bottom-[2rem]",
          styles.button,
          className
        )}
      >
        <div
          className={cn(
            "h-full bg-green-dark p-[4rem]",
            styles.polygonBorder,
            classNames?.border
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
                "relative flex h-full items-center justify-center bg-green px-[50rem] py-[8rem]",
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
              {children}
            </div>
          </div>
          <div className="absolute inset-0 z-[2] bg-white/5 opacity-0 group-hover/button:opacity-100" />
          <div
            className={cn("absolute inset-y-0 left-[-100%]", styles.glimmer)}
          >
            <div
              className={cn(
                "aspect-square h-full w-full bg-white/30",
                styles.polygonGlimmer
              )}
            />
          </div>
        </div>
        <div className={cn("absolute left-[-2rem] top-[-2rem]", styles.shine)}>
          <Icon.Shine className="h-[24rem] text-white" />
        </div>
      </Component>
    )
  }
) as PolyRefComponent<"button", ButtonProps>

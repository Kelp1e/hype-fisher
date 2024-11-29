import React, { useEffect, useState } from "react"

import { cn, sound } from "~/shared/lib"
import { Icon } from "~/shared/ui"

import { ChestProps } from "./chest.props.ts"

import styles from "./chest.module.css"

export const Chest = (props: ChestProps) => {
  const { fps = 100, className } = props

  const [played, setPlayed] = React.useState<boolean>(false)
  const [frame, setFrame] = useState<number>(0)

  const images = [
    "/images/chest/1.png",
    "/images/chest/2.png",
    "/images/chest/3.png",
    "/images/chest/4.png",
    "/images/chest/5.png",
    "/images/chest/6.png",
    "/images/chest/7.png",
    "/images/chest/8.png",
    "/images/chest/9.png",
    "/images/chest/10.png",
  ]

  useEffect(() => {
    if (!played) return

    let index = 0

    const interval = setInterval(() => {
      index += 1

      if (index < images.length) {
        setFrame(index)
      } else {
        clearInterval(interval)
      }
    }, fps)

    return () => clearInterval(interval)
  }, [played, setPlayed, fps, images.length])

  return (
    <div className="relative">
      <button
        onClick={() => {
          sound("click")
          sound("openChest")
          setPlayed(true)
        }}
        disabled={played}
        className={cn("relative z-[2]", styles.button)}
      >
        <img src={images[frame]} alt={`Chest`} className={cn("", className)} />
        <div className="absolute inset-0">
          <div className="h-[35%]">
            <Icon.Shine
              className={cn("h-full text-white", styles.shine, {
                hidden: played,
              })}
            />
          </div>
        </div>
      </button>
    </div>
  )
}

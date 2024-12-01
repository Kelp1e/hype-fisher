import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import { cn, useSoundContext } from "~/shared/lib"
import { Icon, StartFishingButton } from "~/shared/ui"

import { ChestProps } from "./chest.props.ts"

import styles from "./chest.module.css"

export const Chest = (props: ChestProps) => {
  const { fps = 100, className } = props

  const { t } = useTranslation()

  const sound = useSoundContext()

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
          sound?.play("click")
          sound?.play("openChest")
          setPlayed(true)
        }}
        disabled={played}
        className={cn("relative z-[2]", styles.button)}
      >
        <div className="relative w-fit">
          <img
            src={images[frame]}
            alt={`Chest`}
            className={cn("relative z-[1]", className)}
          />
          <motion.div className="absolute inset-0 z-[0]">
            <img
              src={images[frame]}
              alt={`Chest`}
              style={{
                filter:
                  "drop-shadow(2rem 2rem 0 white) drop-shadow(-2rem 2rem 0 white) drop-shadow(2rem -2rem 0 white) drop-shadow(-2rem -2rem 0 white)",
              }}
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 z-[3]">
          <div className="h-[35%]">
            <Icon.Shine
              className={cn("h-full text-white", styles.shine, {
                hidden: played,
              })}
            />
          </div>
        </div>
        <motion.div className="absolute inset-0 z-[2] flex items-center">
          <motion.div className="left-1/2 translate-x-[calc(-50%+125rem)] font-kemco text-[24rem]">
            <motion.div
              animate={played ? "played" : "stop"}
              variants={{
                played: {
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                  },
                },
                stop: {
                  opacity: 1,
                },
              }}
            >
              <div className="mt-[10rem] animate-ping">{t("open")}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </button>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        animate={frame > 5 ? "open" : "closed"}
        initial={{
          bottom: 0,
          opacity: 0,
        }}
        variants={{
          open: {
            bottom: "100%",
            opacity: 1,
            transition: {
              type: "spring",
            },
          },
          closed: {
            opacity: 0,
            bottom: 0,
          },
        }}
      >
        <div className="animate-flying-y">
          <StartFishingButton className="hover:bottom-0" />
        </div>
      </motion.div>
    </div>
  )
}

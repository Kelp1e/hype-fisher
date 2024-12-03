import React from "react"

import { motion } from "framer-motion"

import { cn, useLocalStorage, useSoundContext } from "~/shared/lib"

import { Fisher } from "../fisher"
import { BackgroundProps } from "./background.props.ts"

export const Background = (props: BackgroundProps) => {
  const { className, children } = props

  const sound = useSoundContext()

  const [fisher, setFisher] = useLocalStorage<
    React.ComponentProps<typeof Fisher>["value"]
  >("fisher", "boy")

  const onFisherClick = () => {
    setFisher((prev) =>
      prev === "boy" ? "girl" : prev === "girl" ? "old" : "boy"
    )

    sound?.play("click")
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat",
        className
      )}
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 lg:hidden">
        <motion.div
          initial={{
            x: "-100%",
            y: "-50%",
          }}
          animate={{
            x: "-14%",
            y: "-50%",
            transition: { type: "spring", duration: 1, delay: 0.3 },
          }}
          className="absolute bottom-0 left-0 h-[70%] w-fit max-w-[500rem]"
        >
          <img
            src="/gifs/yellow-boat.gif"
            alt="yellow boat"
            className="h-full w-full object-contain object-left-bottom"
          />
        </motion.div>

        <motion.div
          initial={{
            x: "100%",
            y: "-175%",
          }}
          animate={{
            x: "14%",
            y: "-175%",
            transition: { type: "spring", duration: 1, delay: 0.5 },
          }}
          className="absolute bottom-0 right-0 h-[35%] w-fit max-w-[500rem]"
        >
          <img
            src="/gifs/yellow-boat.gif"
            alt="yellow boat"
            className="h-full w-full -scale-x-100 object-contain object-left-bottom"
          />
        </motion.div>
      </div>
      <div className="absolute inset-0">
        <div className="hidden h-full items-end justify-end lg:flex">
          <div
            className="h-full max-h-[85%] max-w-[50%] cursor-pointer"
            onClick={onFisherClick}
          >
            <Fisher value={fisher} className="h-full" />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

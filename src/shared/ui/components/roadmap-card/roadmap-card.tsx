import React from "react"

import { motion } from "framer-motion"

import { cn } from "~/shared/lib"
import { Card } from "~/shared/ui"

import { RoadmapCardProps } from "./roadmap-card.props.ts"

export const RoadmapCard = (props: RoadmapCardProps) => {
  const { date, icon, bullets, current = false } = props

  // TODO: Try to remove state
  const [isBouncing, setIsBouncing] = React.useState<boolean>(false)

  const handleOnIconClick = () => {
    setIsBouncing(true)

    setTimeout(() => setIsBouncing(false), 200)
  }

  return (
    <Card
      classNames={{
        top: cn({ "bg-[#BEEF6D]": current }),
        right: cn({ "bg-[#036244]": current }),
        bottom: cn({ "bg-[#036244]": current }),
        left: cn({ "bg-[#BEEF6D]": current }),
        content: cn({ "bg-[#18B45C]": current }),
      }}
      className="h-full"
    >
      <div className="h-full px-[20rem] pb-[20rem] pt-[30rem]">
        <div className="flex h-full flex-col items-center justify-between gap-[35rem] text-center text-white">
          <h1 className="font-kemco text-[16rem] min-[1024px]:text-[28rem]">
            {date}
          </h1>
          <div onClick={handleOnIconClick} className="relative cursor-pointer">
            {/*TODO: Make a "steps" animation*/}
            <motion.div
              animate={{
                y: isBouncing ? "-10rem" : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="inline-block"
            >
              {icon}
            </motion.div>
          </div>
          <p className="flex flex-col items-center gap-[20rem] text-center font-de-pixel-klein text-[14rem] min-[1024px]:text-[16rem]">
            {bullets?.map((bullet, index) => <span key={index}>{bullet}</span>)}
          </p>
        </div>
      </div>
    </Card>
  )
}

import React from "react"

import { motion, useInView } from "framer-motion"

import { Text } from "~/shared/ui"

export const RoadmapTitle = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  const inView = useInView(ref, {
    once: true,
    amount: 0.5,
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-[20rem] text-center"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Text
        as="h1"
        className="font-kemco text-[24rem] leading-none min-[1024px]:text-[64rem]"
        classNames={{ shadow: "bottom-[-10%] left-[-2%] text-[#054F86]" }}
        shadow
      >
        Roadmap
      </Text>
      <p className="text-[16rem] uppercase">Turn your catch into rewards</p>
    </motion.div>
  )
}

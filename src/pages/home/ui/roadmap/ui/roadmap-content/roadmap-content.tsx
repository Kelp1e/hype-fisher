import React from "react"

import { motion, useInView } from "framer-motion"

import { Icon, RoadmapCard } from "~/shared/ui"

export const RoadmapContent = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
  })

  const cardsVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: "50rem",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="mx-auto grid max-w-[520rem] grid-cols-2 gap-[20rem] min-[768px]:max-w-full min-[768px]:grid-cols-4"
      variants={cardsVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div variants={cardVariants}>
        <RoadmapCard
          current
          date="OCTOBER 24"
          icon={<Icon.OrangeFish className="h-[20rem] -rotate-45" />}
          bullets={["Catch $HYPECOINS in single-player arcade fishing"]}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <RoadmapCard
          date="Now-dec 24"
          icon={<Icon.GreenFish className="h-[35rem] -rotate-45" />}
          bullets={[
            "Catch $HYPECOINS through single-player arcade fishing",
            "Win $HYPECOINS in PVP fishing tournaments",
          ]}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <RoadmapCard
          date="Jan 25"
          icon={<Icon.GreenFish className="h-[52.5rem] -rotate-45" />}
          bullets={[
            "Get valuable $AIRDROP based on your $HYPECOIN amount and use it in the GAME",
          ]}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <RoadmapCard
          date="2025"
          icon={<Icon.GreenFish className="h-[78.25rem] -rotate-45" />}
          bullets={[
            "Catch fish in various game modes and earn $TON",
            "Enjoy IRL fishing tournament around the world",
          ]}
        />
      </motion.div>
    </motion.div>
  )
}

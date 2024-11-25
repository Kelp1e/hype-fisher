import React from "react"

import { motion, useInView } from "framer-motion"

import { Icon, RoadmapCard, Scene, Text } from "~/shared/ui"

export const Roadmap = () => {
  const cardsRef = React.useRef<HTMLDivElement>(null)

  const inView = useInView(cardsRef, {
    once: true,
    amount: 0.5,
  })

  const cards = {
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

  const card = {
    hidden: {
      opacity: 0,
      y: 50,
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
    <Scene
      src="/videos/underwater.mp4"
      className="relative h-fit min-h-[100dvh] pb-[40rem] pt-[60rem]"
    >
      <div className="max-container mx-auto flex flex-col gap-[30rem]">
        <div className="flex flex-col items-center gap-[20rem] text-center">
          <Text
            as="h1"
            className="font-kemco text-[24rem] leading-none min-[1024px]:text-[64rem]"
            classNames={{ shadow: "bottom-[-10%] left-[-2%] text-[#054F86]" }}
            shadow
          >
            Roadmap
          </Text>
          <p className="text-[16rem]">TURN YOUR CATCH INTO REWARDS</p>
        </div>
        <motion.div
          ref={cardsRef}
          className="mx-auto grid max-w-[520rem] grid-cols-2 gap-[20rem] min-[768px]:max-w-full min-[768px]:grid-cols-4"
          variants={cards}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={card}>
            <RoadmapCard
              current
              date="OCTOBER 24"
              icon={<Icon.OrangeFish className="h-[20rem] -rotate-45" />}
              bullets={["Catch $HYPECOINS in single-player arcade fishing"]}
            />
          </motion.div>
          <motion.div variants={card}>
            <RoadmapCard
              date="Now-dec 24"
              icon={<Icon.GreenFish className="h-[35rem] -rotate-45" />}
              bullets={[
                "Catch $HYPECOINS through single-player arcade fishing",
                "Win $HYPECOINS in PVP fishing tournaments",
              ]}
            />
          </motion.div>
          <motion.div variants={card}>
            <RoadmapCard
              date="Jan 25"
              icon={<Icon.GreenFish className="h-[52.5rem] -rotate-45" />}
              bullets={[
                "Get valuable $AIRDROP based on your $HYPECOIN amount and use it in the GAME",
              ]}
            />
          </motion.div>
          <motion.div variants={card}>
            <RoadmapCard
              date="2025"
              icon={<Icon.GreenFish className="h-[78.25rem] -rotate-45" />}
              bullets={[
                "Catch $HYPECOINS through single-player arcade fishing",
                "Win $HYPECOINS in PVP fishing tournaments",
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </Scene>
  )
}

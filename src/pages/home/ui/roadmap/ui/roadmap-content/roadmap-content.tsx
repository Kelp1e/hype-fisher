import React from "react"

import { motion, steps, useInView } from "framer-motion"
import { useTranslation } from "react-i18next"

import { Icon, RoadmapCard } from "~/shared/ui"

export const RoadmapContent = () => {
  const { t } = useTranslation()

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
      className="mx-auto grid max-w-[520rem] grid-cols-2 grid-rows-2 gap-[20rem] md:max-w-full md:grid-cols-4 md:grid-rows-1"
      variants={cardsVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div variants={cardVariants} className="h-full">
        <RoadmapCard
          current
          date={t("roadmap.cards.0.date")}
          icon={
            <motion.div
              animate={{ y: [0, "-4rem", 0] }}
              transition={{
                duration: 2,
                ease: steps(2),
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Icon.OrangeFish className="h-[20rem] -rotate-45" />
            </motion.div>
          }
          bullets={[t("roadmap.cards.0.bullets.0")]}
        />
      </motion.div>
      <motion.div variants={cardVariants} className="h-full">
        <RoadmapCard
          date={t("roadmap.cards.1.date")}
          icon={
            <motion.div
              animate={{ y: [0, "-4rem", 0] }}
              transition={{
                duration: 2,
                delay: 0.3,
                ease: steps(2),
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Icon.GreenFish className="h-[35rem] -rotate-45" />
            </motion.div>
          }
          bullets={[
            t("roadmap.cards.1.bullets.0"),
            t("roadmap.cards.1.bullets.1"),
            t("roadmap.cards.1.bullets.2"),
          ]}
        />
      </motion.div>
      <motion.div variants={cardVariants} className="h-full">
        <RoadmapCard
          date={t("roadmap.cards.2.date")}
          icon={
            <motion.div
              animate={{ y: [0, "-4rem", 0] }}
              transition={{
                duration: 2,
                delay: 0.6,
                ease: steps(2),
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Icon.GreenFish className="h-[52.5rem] -rotate-45" />
            </motion.div>
          }
          bullets={[t("roadmap.cards.2.bullets.0")]}
        />
      </motion.div>
      <motion.div variants={cardVariants} className="h-full">
        <RoadmapCard
          date={t("roadmap.cards.3.date")}
          icon={
            <motion.div
              animate={{ y: [0, "-4rem", 0] }}
              transition={{
                duration: 2,
                delay: 1,
                ease: steps(2),
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Icon.GreenFish className="h-[78.25rem] -rotate-45" />
            </motion.div>
          }
          bullets={[t("roadmap.cards.3.bullets.0")]}
        />
      </motion.div>
    </motion.div>
  )
}

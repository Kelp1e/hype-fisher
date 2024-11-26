import { motion } from "framer-motion"

import { cn } from "~/shared/lib"

import { FisherProps } from "./fisher.props.ts"

export const Fisher = (props: FisherProps) => {
  const { value = "boy", className } = props

  const imageUrl = {
    boy: "/images/pepe/boy.png",
    girl: "/images/pepe/girl.png",
    old: "/images/pepe/old.png",
  }[value]

  const variants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 2.3,
      },
    },
  }

  return (
    <div className={cn("relative w-fit", className)}>
      <motion.div
        className="h-full w-full"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <img
          src={imageUrl}
          alt={`fisher-${value}`}
          className="relative h-full w-full animate-flying-y object-contain object-bottom"
        />
      </motion.div>
      <div className="absolute inset-x-[10%] bottom-0">
        <img src="/images/wave.png" alt="wave" className="h-full animate-flying-x w-full" />
      </div>
    </div>
  )
}

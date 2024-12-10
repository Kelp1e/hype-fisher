import { cn } from "~/shared/lib"
import { Card } from "~/shared/ui"

import { RoadmapCardProps } from "./roadmap-card.props.ts"

import styles from "./roadmap-card.module.css"

export const RoadmapCard = (props: RoadmapCardProps) => {
  const { title, icon, bullets, type = "coming" } = props

  return (
    <Card
      classNames={{
        top: cn({
          "bg-[#BEEF6D]": type === "passed",
        }),
        right: cn({
          "bg-[#036244]": type === "passed",
        }),
        bottom: cn({
          "bg-[#036244]": type === "passed" || type === "in-progress",
        }),
        left: cn({
          "bg-[#BEEF6D]": type === "passed",
        }),
        content: cn({
          "bg-[#18B45C]": type === "passed",
        }),
      }}
      className="h-full"
    >
      {type === "in-progress" && (
        <div
          className={cn("absolute inset-0 top-1/2 bg-[#18B45C]", styles.waves)}
        />
      )}
      <div className="relative z-[2] h-full px-[20rem] pb-[20rem] pt-[30rem]">
        <div className="flex h-full flex-col items-center justify-between gap-[35rem] text-center text-white">
          <h1 className="font-kemco text-[16rem] lg:text-[28rem]">{title}</h1>
          {icon}
          <p className="flex flex-col items-center gap-[20rem] text-center font-de-pixel-klein text-[14rem] lg:text-[16rem]">
            {bullets?.map((bullet, index) => <span key={index}>{bullet}</span>)}
          </p>
        </div>
      </div>
    </Card>
  )
}

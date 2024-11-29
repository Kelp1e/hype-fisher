import { cn } from "~/shared/lib"
import { Card } from "~/shared/ui"

import { RoadmapCardProps } from "./roadmap-card.props.ts"

export const RoadmapCard = (props: RoadmapCardProps) => {
  const { date, icon, bullets, current = false } = props

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
          <h1 className="font-kemco text-[16rem] lg:text-[28rem]">
            {date}
          </h1>
          {icon}
          <p className="flex flex-col items-center gap-[20rem] text-center font-de-pixel-klein text-[14rem] lg:text-[16rem]">
            {bullets?.map((bullet, index) => <span key={index}>{bullet}</span>)}
          </p>
        </div>
      </div>
    </Card>
  )
}

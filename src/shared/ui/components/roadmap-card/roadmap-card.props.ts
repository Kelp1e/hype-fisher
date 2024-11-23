import React from "react"

export type RoadmapCardProps = {
  date: string
  icon: React.ReactNode
  bullets: string[]

  current?: boolean
}

import React from "react"

export type RoadmapCardProps = {
  title: string
  icon: React.ReactNode
  bullets: string[]

  type?: "passed" | "in-progress" | "coming"
}

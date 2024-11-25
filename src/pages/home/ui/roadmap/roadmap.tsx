import { Scene } from "~/shared/ui"

import { RoadmapContent, RoadmapTitle } from "./ui"

export const Roadmap = () => {
  return (
    <Scene
      src="/videos/underwater.mp4"
      className="relative h-fit min-h-[100dvh] pb-[40rem] pt-[60rem]"
    >
      <div className="max-container mx-auto flex flex-col gap-[30rem]">
        <RoadmapTitle />
        <RoadmapContent />
      </div>
    </Scene>
  )
}

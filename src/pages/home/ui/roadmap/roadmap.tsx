import { Chest, Scene } from "~/shared/ui"

import { RoadmapContent, RoadmapTitle } from "./ui"

export const Roadmap = () => {
  return (
    <Scene
      src="/videos/underwater.mp4"
      className="relative flex h-fit min-h-[100dvh] flex-col gap-[100rem] pb-[40rem] pt-[60rem]"
    >
      <div className="max-container mx-auto flex flex-1 flex-col gap-[30rem]">
        <RoadmapTitle />
        <RoadmapContent />
      </div>
      <div className="max-container mx-auto flex items-end justify-center">
        <Chest className="h-[200rem]" />
      </div>
    </Scene>
  )
}

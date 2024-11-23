import { Card, Scene } from "~/shared/ui"

export const Roadmap = () => {
  return (
    <Scene
      src="/videos/underwater.mp4"
      className="relative flex h-fit min-h-[100dvh] flex-col"
    >
      <div className="grid grid-cols-4 gap-[20rem]">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <div className="font-kemco">Some content {index}</div>
            <div>Some description {index}</div>
          </Card>
        ))}
      </div>
    </Scene>
  )
}

import { Icon, RoadmapCard, Scene, Text } from "~/shared/ui"

export const Roadmap = () => {
  return (
    <Scene
      src="/videos/underwater.mp4"
      className="relative h-fit min-h-[100dvh] pb-[40rem] pt-[60rem]"
    >
      <div className="flex max-container mx-auto flex-col gap-[30rem]">
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
        <div
          className="mx-auto grid max-w-[250rem] grid-cols-1 gap-[20rem] min-[420px]:max-w-[520rem] min-[420px]:grid-cols-2 min-[768px]:max-w-full min-[768px]:grid-cols-4">
          <RoadmapCard
            current
            date="OCTOBER 24"
            icon={<Icon.OrangeFish className="h-[20rem] -rotate-45" />}
            bullets={["Catch $HYPECOINS in single-player arcade fishing"]}
          />
          <RoadmapCard
            date="Now-dec 24"
            icon={<Icon.GreenFish className="h-[35rem] -rotate-45" />}
            bullets={[
              "Catch $HYPECOINS through single-player arcade fishing",
              "Win $HYPECOINS in PVP fishing tournaments",
            ]}
          />
          <RoadmapCard
            date="Jan 25"
            icon={<Icon.GreenFish className="h-[52.5rem] -rotate-45" />}
            bullets={[
              "Get valuable $AIRDROP based on your $HYPECOIN amount and use it in the GAME",
            ]}
          />
          <RoadmapCard
            date="2025"
            icon={<Icon.GreenFish className="h-[78.25rem] -rotate-45" />}
            bullets={[
              "Catch $HYPECOINS through single-player arcade fishing",
              "Win $HYPECOINS in PVP fishing tournaments",
            ]}
          />
        </div>
      </div>
    </Scene>
  )
}

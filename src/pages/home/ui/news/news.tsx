import Marquee from "react-fast-marquee"

export const News = () => {
  return (
    <div className="flex h-[80rem] items-center justify-center overflow-hidden bg-green font-kemco">
      <Marquee autoFill className="flex gap-[10rem]" speed={25}>
        <div className="mx-[20rem]">Dive into new adventures</div>
        <div className="mx-[20rem]">Live multiplayer</div>
      </Marquee>
    </div>
  )
}

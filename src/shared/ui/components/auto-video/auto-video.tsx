import { AutoVideoProps } from "./auto-video.props.ts"

export const AutoVideo = (props: AutoVideoProps) => {
  const { src, ...rest } = props

  return (
    <video {...rest} muted autoPlay loop playsInline>
      <source src={src} />
    </video>
  )
}

import { VideoProps } from "./video.props.ts"

export const Video = (props: VideoProps) => {
  const { src, ...rest } = props

  return (
    <video {...rest} muted autoPlay loop playsInline>
      <source src={src} />
    </video>
  )
}

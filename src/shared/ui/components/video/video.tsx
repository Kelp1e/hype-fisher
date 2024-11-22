import { VideoProps } from "./video.props.ts"

export const Video = (props: VideoProps) => {
  const { ...rest } = props

  return <video {...rest} muted autoPlay loop playsInline />
}

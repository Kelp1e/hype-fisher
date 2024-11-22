import { MarqueeProps } from "./marquee.props.ts"

export const Marquee = (props: MarqueeProps) => {
  const { children } = props

  return <div>{children}</div>
}

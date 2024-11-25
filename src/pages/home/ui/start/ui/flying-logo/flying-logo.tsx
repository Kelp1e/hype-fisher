import { cn } from "~/shared/lib"

import { FlyingLogoProps } from "./flying-logo.props.ts"

import styles from "./flying-logo.module.css"

export const FlyingLogo = (props: FlyingLogoProps) => {
  const { className } = props

  return (
    <img
      src="/images/logo.png"
      alt="hype hisher logo"
      className={cn("relative block", styles.flyingLogo, className)}
    />
  )
}

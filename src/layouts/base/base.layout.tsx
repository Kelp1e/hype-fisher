import { LayoutProps } from "~/layouts/layout.ts"

export const Base = (props: LayoutProps) => {
  const { children } = props

  return <div>{children}</div>
}

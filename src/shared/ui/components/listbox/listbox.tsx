import * as Headless from "@headlessui/react"

import { ListboxProps } from "./listbox.props.ts"

export const Listbox = (props: ListboxProps) => {
  const { ...rest } = props

  return <Headless.Listbox {...rest} />
}

import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"

import { ListboxProps } from "./listbox.props.ts"

export const Listbox = (props: ListboxProps) => {
  const { className, ...rest } = props

  return (
    <Headless.Listbox
      as="div"
      className={cn(
        "pointer-coarse:data-[open]:bottom-0 pointer-coarse:hover:bottom-0 relative hover:bottom-[2rem] data-[open]:bottom-[2rem]",
        className
      )}
      {...rest}
    />
  )
}

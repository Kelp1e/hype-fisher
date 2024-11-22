import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"

import { ListboxOptionsProps } from "./listbox-options.props.ts"

export const ListboxOptions = (props: ListboxOptionsProps) => {
  const { className, ...rest } = props

  return (
    <Headless.ListboxOptions
      anchor="bottom"
      className={cn(
        "flex w-[var(--button-width)] flex-col [--anchor-gap:0] [--anchor-padding:12rem] focus:outline-none",
        className
      )}
      {...rest}
    />
  )
}

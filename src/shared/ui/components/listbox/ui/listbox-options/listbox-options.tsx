import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"

import { ListboxOptionsProps } from "./listbox-options.props.ts"

export const ListboxOptions = (props: ListboxOptionsProps) => {
  const { className, ...rest } = props

  return (
    <Headless.ListboxOptions
      anchor="bottom"
      className={cn(
        "w-[var(--button-width)] [--anchor-gap:0rem] [--anchor-padding:12rem]",
        className
      )}
      {...rest}
    />
  )
}

import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"
import { Icon } from "~/shared/ui"

import { ListboxButtonProps } from "./listbox-button.props.ts"

export const ListboxButton = (props: ListboxButtonProps) => {
  const { className, children, ...rest } = props

  return (
    <Headless.ListboxButton
      className={cn(
        "font-de-pixel-klein eaten-corners group/listbox-button h-[30rem] bg-[#DF7434] p-[4rem]",
        className
      )}
      {...rest}
    >
      <div className="flex h-full w-full items-center justify-between gap-[8rem] bg-orange px-[12rem]">
        <div className="flex items-center gap-[8rem]">{children}</div>
        <Icon.Chevron className="h-[8rem] text-[#DF7434] group-data-[open]/listbox-button:rotate-180" />
      </div>
    </Headless.ListboxButton>
  )
}

import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"

import { ListboxOptionProps } from "./listbox-option.props.ts"

export const ListboxOption = (props: ListboxOptionProps) => {
  const { className, children, ...rest } = props

  return (
    <Headless.ListboxOption
      className={cn(
        "eaten-corners mt-[-4rem] bg-[#E97835] p-[4rem] first:mt-[0rem]",
        className
      )}
      {...rest}
    >
      <div className="bg-orange px-[12rem]">{children}</div>
    </Headless.ListboxOption>
  )
}

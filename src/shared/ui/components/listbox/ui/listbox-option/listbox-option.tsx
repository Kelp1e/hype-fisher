import { ComponentProps } from "react"

import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"
import { Corners } from "~/shared/ui"

import { ListboxOptionProps } from "./listbox-option.props.ts"

export const ListboxOption = (props: ListboxOptionProps) => {
  const { className, children, ...rest } = props

  return (
    <Headless.ListboxOption
      as={(as: ComponentProps<typeof Corners>) => (
        <Corners as={"button"} {...as} />
      )}
      className={cn(
        "group/listbox-option bg-[#E97835] data-[selected]:bg-orange",
        className
      )}
      classNames={{
        content:
          "bg-orange group-data-[selected]/listbox-option:bg-[#E97835] px-[12rem] text-left",
      }}
      {...rest}
    >
      {(option) => (
        <div>
          {typeof children === "function" ? children(option) : children}
        </div>
      )}
    </Headless.ListboxOption>
  )
}

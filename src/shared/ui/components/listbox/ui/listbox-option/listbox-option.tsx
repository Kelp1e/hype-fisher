import React, { ComponentProps } from "react"

import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"
import { Corners } from "~/shared/ui"

import { ListboxOptionProps } from "./listbox-option.props.ts"

export const ListboxOption = (props: ListboxOptionProps) => {
  const { className, children, ...rest } = props

  return (
    <Headless.ListboxOption
      as={React.forwardRef<HTMLButtonElement, ComponentProps<typeof Corners>>(
        (asProps, ref) => (
          <Corners as="button" ref={ref} {...asProps} />
        )
      )}
      className={cn("group/listbox-option mt-[-4rem] first:mt-0 bg-[#E97835]", className)}
      classNames={{
        content:
          "bg-orange group-data-[active]/listbox-option:bg-[#E97835] px-[12rem] text-left",
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

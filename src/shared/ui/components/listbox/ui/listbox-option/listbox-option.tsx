import React from "react"

import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"
import { sound } from "~/shared/lib"
import { Corners, Icon } from "~/shared/ui"

import { ListboxOptionProps } from "./listbox-option.props.ts"

export const ListboxOption = (props: ListboxOptionProps) => {
  const { onClick, className, children, ...rest } = props

  return (
    <Headless.ListboxOption
      as={React.forwardRef<
        HTMLButtonElement,
        React.ComponentProps<typeof Corners>
      >((asProps, ref) => (
        <Corners as="button" size="4rem" ref={ref} {...asProps} />
      ))}
      onClick={() => {
        sound("click")
        onClick?.()
      }}
      className={cn(
        "group/listbox-option mt-[-4rem] bg-[#E97835] p-[4rem] first:mt-0",
        className
      )}
      {...rest}
    >
      {(option) => (
        <div className="flex items-center justify-between gap-[8rem] bg-orange px-[12rem] text-left group-data-[active]/listbox-option:bg-[#E97835]">
          <div>
            {typeof children === "function" ? children(option) : children}
          </div>
          <Icon.Checked className="hidden h-[12rem] text-[#DF7434] group-data-[selected]/listbox-option:block group-data-[active]/listbox-option:text-orange" />
        </div>
      )}
    </Headless.ListboxOption>
  )
}

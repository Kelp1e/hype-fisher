import React from "react"

import * as Headless from "@headlessui/react"

import { cn, useSoundContext } from "~/shared/lib"
import { Corners, Icon } from "~/shared/ui"

import { ListboxOptionProps } from "./listbox-option.props.ts"

export const ListboxOption = (props: ListboxOptionProps) => {
  const { onClick, className, disabled, children, ...rest } = props

  const sound = useSoundContext()

  return (
    <Headless.ListboxOption
      as={React.forwardRef<
        HTMLButtonElement,
        React.ComponentProps<typeof Corners>
      >((asProps, ref) => (
        <Corners as="button" size="4rem" ref={ref} {...asProps} />
      ))}
      onClick={() => {
        sound?.play("click")
        onClick?.()
      }}
      onMouseEnter={() => {
        if (!disabled) {
          sound?.play("hover")
        }
      }}
      className={cn(
        "group/listbox-option mt-[-4rem] bg-[#E97835] p-[4rem] first:mt-0 data-[disabled]:cursor-default",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {(option) => (
        <div className="flex items-center justify-between gap-[8rem] bg-orange px-[12rem] text-left group-data-[active]/listbox-option:bg-[#E97835] group-data-[disabled]/listbox-option:opacity-50">
          <div>
            {typeof children === "function" ? children(option) : children}
          </div>
          <Icon.Checked className="hidden h-[12rem] text-[#DF7434] group-data-[selected]/listbox-option:block group-data-[active]/listbox-option:text-orange" />
        </div>
      )}
    </Headless.ListboxOption>
  )
}

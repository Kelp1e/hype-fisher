import React from "react"

import * as Headless from "@headlessui/react"

import { cn } from "~/shared/lib"
import { Corners, Icon } from "~/shared/ui"

import { ListboxButtonProps } from "./listbox-button.props.ts"

export const ListboxButton = (props: ListboxButtonProps) => {
  const { className, children, ...rest } = props

  return (
    <Headless.ListboxButton
      as={React.forwardRef<
        HTMLButtonElement,
        React.ComponentProps<typeof Corners>
      >((asProps, ref) => (
        <Corners as="button" size="4rem" ref={ref} {...asProps} />
      ))}
      className={cn(
        "group/listbox-button h-[30rem] hover:bg-orange data-[open]:bg-orange bg-[#DF7434] p-[4rem]",
        className
      )}
      {...rest}
    >
      {(button) => (
        <div className="flex h-full w-full items-center justify-between gap-[8rem] bg-orange px-[12rem]">
          {typeof children === "function" ? children(button) : children}
          <Icon.Chevron className="h-[8rem] text-[#DF7434] group-data-[open]/listbox-button:rotate-180" />
        </div>
      )}
    </Headless.ListboxButton>
  )
}

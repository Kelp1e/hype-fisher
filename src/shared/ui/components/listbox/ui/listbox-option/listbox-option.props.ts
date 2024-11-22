import { ComponentProps } from "react"

import * as Headless from "@headlessui/react"

export type ListboxOptionProps = Omit<
  ComponentProps<typeof Headless.ListboxOption>,
  "as"
>

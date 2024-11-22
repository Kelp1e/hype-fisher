import React from "react"

import * as Headless from "@headlessui/react"

export type ListboxOptionProps = Omit<
  React.ComponentProps<typeof Headless.ListboxOption>,
  "as"
>

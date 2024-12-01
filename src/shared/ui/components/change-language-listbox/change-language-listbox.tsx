import * as Headless from "@headlessui/react"
import { useTranslation } from "react-i18next"

import { useSoundContext } from "~/shared/lib"
import { Flag, Listbox, ListboxOption, ListboxOptions } from "~/shared/ui"

export const ChangeLanguageListbox = () => {
  const { i18n } = useTranslation()

  const sound = useSoundContext()

  const languages = Object.keys(i18n.options.resources || {})

  return (
    <div>
      <Listbox
        className="flex items-center"
        value={i18n.resolvedLanguage}
        onChange={i18n.changeLanguage}
      >
        <Headless.ListboxButton
          className="size-[30rem]"
          onClick={() => {
            sound?.play("click")
          }}
        >
          {({ value: language }) => (
            <Flag country={language} className="h-full" />
          )}
        </Headless.ListboxButton>
        <ListboxOptions
          anchor="bottom start"
          className="w-[100rem] [--anchor-gap:10rem]"
        >
          {languages?.map((language) => (
            <ListboxOption
              key={language}
              value={language}
              className="uppercase"
              disabled={["es", "id", "hi"].includes(language)}
            >
              <div className="flex items-center gap-[8rem]">
                <Flag country={language} className="h-[16rem]" />
                <span>{language}</span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

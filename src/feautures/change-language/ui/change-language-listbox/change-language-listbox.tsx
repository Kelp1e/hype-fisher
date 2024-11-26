import { useTranslation } from "react-i18next"

import {
  Flag,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "~/shared/ui"

export const ChangeLanguageListbox = () => {
  const { i18n } = useTranslation()

  const languages = Object.keys(i18n.options.resources || {})

  return (
    <div>
      <Listbox value={i18n.language} onChange={i18n.changeLanguage}>
        <ListboxButton className="w-[100rem] uppercase">
          {({ value: language }) => (
            <div className="flex items-center gap-[8rem]">
              <Flag country={language} className="h-[16rem]" />
              <span>{language}</span>
            </div>
          )}
        </ListboxButton>
        <ListboxOptions>
          {languages?.map((language) => (
            <ListboxOption
              key={language}
              value={language}
              className="uppercase"
              disabled={["de", "fr", "es", "id", "hi"].includes(language)}
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

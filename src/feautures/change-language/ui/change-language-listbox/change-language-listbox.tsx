import { useTranslation } from "react-i18next"

import {
  Icon,
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
        <ListboxButton className="w-[80rem] uppercase">
          {({ value }) => (
            <div className="flex items-center gap-[8rem]">
              <Icon.FlagUsa className="h-[16rem]" />
              <span>{value}</span>
            </div>
          )}
        </ListboxButton>
        <ListboxOptions>
          {languages?.map((language) => (
            <ListboxOption
              key={language}
              value={language}
              className="uppercase"
            >
              <div className="flex items-center gap-[8rem]">
                <Icon.FlagUsa className="h-[16rem]" />
                <span>{language}</span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

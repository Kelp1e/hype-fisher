import { useTranslation } from "react-i18next"

import {
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
        <ListboxButton className="uppercase">
          {({ value }) => <div>{value}</div>}
        </ListboxButton>
        <ListboxOptions>
          {languages?.map((language) => (
            <ListboxOption
              key={language}
              value={language}
              className="uppercase"
            >
              <div className="flex items-center gap-[8rem]">
                <span>{language}</span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

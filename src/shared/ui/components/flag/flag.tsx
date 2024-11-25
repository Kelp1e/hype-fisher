import { Icon } from "~/shared/ui"

import { FlagProps } from "./flag.props.ts"

export const Flag = (props: FlagProps) => {
  const { country, className } = props

  const FlagIcon =
    {
      en: Icon.Flag.Usa,
      ru: Icon.Flag.Russian,
      es: Icon.Flag.Spain,
      fr: Icon.Flag.France,
      hi: Icon.Flag.India,
      id: Icon.Flag.Indonesia,
      de: Icon.Flag.Germany,
    }[country] || null

  if (!FlagIcon) {
    return null
  }

  return <FlagIcon className={className} />
}

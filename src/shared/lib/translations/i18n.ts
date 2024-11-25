import i18n from "i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import de from "./languages/de.json"
import en from "./languages/en.json"
import es from "./languages/es.json"
import fr from "./languages/fr.json"
import hi from "./languages/hi.json"
import id from "./languages/id.json"
import ru from "./languages/ru.json"

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
      de: {
        translation: de,
      },
      fr: {
        translation: fr,
      },
      es: {
        translation: es,
      },
      id: {
        translation: id,
      },
      hi: {
        translation: hi,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

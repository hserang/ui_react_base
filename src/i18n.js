import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'

let options = {
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'en',
  ns: ['translations'], // have a common namespace used around the full app
  defaultNS: 'translations',
  keySeparator: false, // we use content as keys
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },
  react: {
    wait: true
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
}
i18n
  .use(XHR)
  .use(LanguageDetector)
  .init(options)

export default i18n

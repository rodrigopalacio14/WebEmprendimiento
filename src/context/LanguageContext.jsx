import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { languages, translations } from '../data/translations'

const LanguageContext = createContext(null)
const codes = languages.map(language => language.code)

function getInitialLanguage() {
  const saved = window.localStorage.getItem('webflex-language')
  if (codes.includes(saved)) return saved

  const browserCode = window.navigator.language?.slice(0, 2)
  if (codes.includes(browserCode)) return browserCode

  return 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('webflex-language', language)
    document.documentElement.lang = language
    document.title = translations[language].meta.title
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages,
      t: translations[language]
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}

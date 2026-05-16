import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { languages, translations } from '../data/translations'

const LanguageContext = createContext(null)
const codes = languages.map(language => language.code)

function getInitialLanguage() {
  const saved = window.localStorage.getItem('nispero-language') || window.localStorage.getItem('webflex-language')
  if (codes.includes(saved)) return saved

  const browserCode = window.navigator.language?.slice(0, 2)
  if (codes.includes(browserCode)) return browserCode

  return 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    const meta = translations[language].meta
    window.localStorage.setItem('nispero-language', language)
    document.documentElement.lang = language
    document.title = meta.title
    setMetaContent('description', meta.description)
    setMetaContent('twitter:title', meta.title)
    setMetaContent('twitter:description', meta.description)
    setPropertyContent('og:title', meta.title)
    setPropertyContent('og:description', meta.description)
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

function setMetaContent(name, content) {
  const element = document.querySelector(`meta[name="${name}"]`)
  if (element) element.setAttribute('content', content)
}

function setPropertyContent(property, content) {
  const element = document.querySelector(`meta[property="${property}"]`)
  if (element) element.setAttribute('content', content)
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}

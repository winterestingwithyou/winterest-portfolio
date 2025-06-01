import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'

export function useLanguage() {
  const { locale, t } = useI18n()

  const changeLanguage = (lang) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
  }

  // Restore language if saved in localStorage
  watchEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved && saved !== locale.value) {
      locale.value = saved
    }
  })

  return { locale, t, changeLanguage }
}

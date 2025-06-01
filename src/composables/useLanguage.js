import { useI18n } from 'vue-i18n'
import { computed, watchEffect } from 'vue'

const languageOptions = {
  en: { label: 'English', icon: 'mdi-web' },
  id: { label: 'Indonesia', icon: 'mdi-flag' }
}

export function useLanguage() {
  const { locale, t } = useI18n()

  // Simpan dan ambil preferensi dari localStorage
  watchEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved && saved !== locale.value) {
      locale.value = saved
    } else if (!saved) {
      localStorage.setItem('lang', 'en') // default
    }
  })

  // Fungsi toggle
  const changeLanguage = () => {
    const newLang = locale.value === 'en' ? 'id' : 'en'
    locale.value = newLang
    localStorage.setItem('lang', newLang)
  }

  const currentLanguage = computed(() => languageOptions[locale.value]?.label || 'Unknown')
  const languageIcon = computed(() => languageOptions[locale.value]?.icon || 'mdi-web')

  return {
    t,
    locale,
    changeLanguage,
    currentLanguage,
    languageIcon
  }
}

import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useLanguage } from './useLanguage'

export function useToggleTheme() {
  const theme = useTheme()
  const isDark = ref(theme.global.current.value.dark)
  const { t } = useLanguage()

  const themeIcon = computed(() =>
    isDark.value ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
  )

  const currentTheme = computed(() =>
    isDark.value ? t('theme.dark') : t('theme.light')
  )

  function toggleTheme() {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
    isDark.value = !isDark.value
  }

  return {
    themeIcon,
    currentTheme,
    toggleTheme,
  }
}

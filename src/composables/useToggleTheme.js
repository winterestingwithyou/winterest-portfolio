import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

export function useToggleTheme() {
  const theme = useTheme()
  const isDark = ref(theme.global.current.value.dark)

  const iconName = computed(() =>
    isDark.value ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
  )

  const iconTitle = computed(() =>
    isDark.value ? 'Dark' : 'Light'
  )

  function toggleTheme() {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
    isDark.value = !isDark.value
  }

  return {
    iconName,
    iconTitle,
    toggleTheme,
  }
}

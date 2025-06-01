import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hello: 'Hello!',
    welcome: 'Welcome to our app',
  },
  id: {
    hello: 'Halo!',
    welcome: 'Selamat datang di aplikasi kami',
  }
}

const i18n = createI18n({
  legacy: false, // untuk Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n

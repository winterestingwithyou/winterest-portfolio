import { createApp } from 'vue'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import head from './plugins/head'
import i18n from './plugins/i18n'

createApp(App)
    .use(vuetify)
    .use(router)
    .use(head)
    .use(i18n)
    .mount('#app')

import { createApp } from 'vue'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import head from './plugins/head'

createApp(App)
    .use(vuetify)
    .use(router)
    .use(head)
    .mount('#app')

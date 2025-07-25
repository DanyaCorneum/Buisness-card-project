import './assets/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { localization } from './localization'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(localization)

app.mount('#app')

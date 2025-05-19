import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@picocss/pico/css/pico.min.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

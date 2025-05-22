import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@picocss/pico/css/pico.min.css'
import './style.css'
import App from './App.vue'

//custom imports

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')

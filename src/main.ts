import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: () => void
  }
}

const app = createApp(App)

app.config.globalProperties.$axios = () => console.log('axios')

app.mount('#app')

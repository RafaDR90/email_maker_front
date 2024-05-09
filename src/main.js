import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './Router.js'
import store from '../store.js'
const pinia = createPinia()

createApp(App).use(router).use(store).use(pinia).mount('#app')

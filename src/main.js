import '../src/assets/all.scss'
import 'v-calendar/style.css'

// 外部
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import VCalendar from 'v-calendar'

// 內部
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.component('LoadingOverlay', Loading)
// Use calendar defaults (optional)
app.use(VCalendar, {})

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button } from 'vant'
import router from './router'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(Button)

app.mount('#app')

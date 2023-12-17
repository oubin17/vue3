// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VFullRegist from './components/fullregist/VFullRegist.vue'

const app = createApp(App)

// 全局注册组件
app.component('VFullRegist', VFullRegist)

app.mount('#app')

// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import axios from './js/axiosUtil.js'
// import axios from 'axios'

import VFullRegist from './components/fullregist/VFullRegist.vue'

const app = createApp(App)

// 全局注册组件
app.component('VFullRegist', VFullRegist)

// 配置axios全局引用
// app.provide('$axios', axios)
app.config.globalProperties.$axios = axios


app.mount('#app')

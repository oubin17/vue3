// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import axios from 'axios'
import axios from './js/axiosUtil.js'

//1.导入方法
import { createPinia } from 'pinia'
//1.1 执行方法，得到实例
const pinia = createPinia();



import VFullRegist from './components/fullregist/VFullRegist.vue'

const app = createApp(App)

// 全局注册组件
app.component('VFullRegist', VFullRegist)

//1.2 把pinia实例添加到app应用中
app.use(pinia)

// 配置axios全局引用
// app.provide('$axios', axios)
app.config.globalProperties.$axios = axios


app.mount('#app')

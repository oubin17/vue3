import { defineStore } from "pinia"
import { ref, computed } from 'vue'

import axiosUtil from '@/js/axiosUtil';

export const useCounterStore = defineStore('counter', () => {
  //定义数据
  const count = ref(0)

  //定义修改数据的方法
  const increment = () => {
    count.value++
  }

  //getter定义
  const doubleCount = computed(() => count.value * 2)

  const result = ref(0)
  //异步action
  const getHello = async () => {
    const res = await axiosUtil.get('/vue3-template/hello')
    console.log(res)
    result.value = res.result
  }

  //以对象的形式返回给组件用
  return {
    count,
    doubleCount,
    increment,
    getHello,
    result
  }
})
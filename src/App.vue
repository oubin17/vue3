<script setup>
import Chazhi from "./components/Chazhi.vue"
import IfDemo from "./components/IfDemo.vue"
import Vfor from "./components/VforDemo.vue"
import Von1 from "./components/VonDemo.vue"

import VEvent from "./components/VEvent.vue"
import VEvent2 from "./components/VEvent-2.vue"

import Vfor2 from "./components/VforDemo2.vue"

import Vref_2 from "./components/Vref-2.vue"

import VCom from "./components/VComputed.vue"

import VProps from "./components/props/VProps.vue"
import { ref } from 'vue'
const propsLikes = 123

const propsRef = ref(100)
setTimeout(() => {
  propsRef.value = 200
}, 3000)

function callback () {
  console.log('收到子组件传过来的事件')
}
function callback2 (params1) {
  console.log('收到子组件传过来的事件，参数' + params1)
}

import Vprovide from "./components/provideinject/Vprovide.vue"

import Vcomposable from "./components/composable/Vcomposable.vue"

import VAxios from "./components/VAxios.vue"

import VPinia from "./components/VPinia.vue"
</script>

<template>
  <!-- 引入组件if -->
  <!-- <IfDemo /> -->

  <!-- 差值表达式 -->
  <!-- <Chazhi /> -->

  <!-- v-for -->
  <!-- <Vfor /> -->

  <!-- v-on -->
  <!-- <Von1 /> -->

  <!-- v-event  -->
  <!-- <VEvent2 /> -->

  <!-- 数组变化侦测 -->
  <!-- <Vfor2 /> -->

  <!-- ref -->
  <!-- <Vref_2 /> -->

  <!-- computed -->
  <!-- <VCom /> -->

  <!-- <VFullRegist /> -->


  <!-- props -->
  <!-- 如果需要动态绑定，可以用v-bind，加上:，可以做到响应式绑定 -->
  <!-- <VProps title="父传子" :propsRef="propsRef" :likes="propsLikes" @click-event="callback"
    @click-event-with-params="callback2" /> -->


  <!-- 依赖注入 -->
  <!-- <Vprovide /> -->

  <!-- 组合式函数 -->
  <!-- <Vcomposable /> -->

  <!-- 测试axios -->
  <!-- <VAxios /> -->

  <VPinia />
</template>

<style scoped></style>
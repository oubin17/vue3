<script setup>
import { inject } from 'vue'
import { myInjectionKey } from '../../js/keys.js'

const key = inject('key', '没有的话提供默认值')

const { location, updateLocation } = inject('location')
console.log(key)

const injected = inject(myInjectionKey)
</script>

<template>
  <div>数据注入方获取到的数据：{{ key }}</div>
  <button @click="updateLocation">{{ location }}</button>
  <div>Symbol注入名： {{ injected.key }}</div>
</template>

<style></style>
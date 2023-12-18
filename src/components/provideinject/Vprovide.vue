<script setup>
import { ref, provide } from 'vue'
import { myInjectionKey } from '../../js/keys.js'
import Vinj from "./Vinject.vue"
const count = ref(0)
provide('message', 'hello!')
provide('key', count)

const location = ref('North Pole')
function updateLocation () {
  location.value = 'South Pole'
}
provide('location', {
  location,
  updateLocation
})

// const key = ref('abc')
provide(myInjectionKey, {
  key: ref('abc')
})
</script>

<template>
  <div>数据提供方：{{ count }}</div>
  <Vinj />
</template>

<style></style>
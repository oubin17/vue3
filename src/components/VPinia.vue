<script setup>
//1.导入use打头的方法
import { useCounterStore } from '@/stores/counter'
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
//1.1 执行方法得到实例对象
const counterStore = useCounterStore()
console.log(counterStore)

//解构赋值
const { count, doubleCount } = storeToRefs(counterStore)
//方法直接从原来的store中解构
const { increment } = counterStore

const result = ref(0)
onMounted(() => {
  counterStore.getHello()
})
</script>

<template>
  <h3>DoubleCount = {{ doubleCount }}</h3>
  <button @click="increment">{{ counterStore.count }}</button>
  <h3>调用结果：{{ counterStore.result }}</h3>
</template>

<style></style>
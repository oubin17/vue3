<!-- 顶层的导入，声明的变量和函数可以摘同一组件的模板中直接使用，可以理解为模板是在同一作用域内声明的一个JavaScript函数一一它自然可以访问与它一起声明的所有内容 -->
<script setup>
import { ref } from 'vue';

// ref可以重复利用，每次相当于创建一个ref实例
const count = ref(0)

function increment () {
  count.value++
  console.log(count)
}

const abc = ref('abc')
function increAbc () {
  console.log(abc.value)
}

// 解构表达式
const object = { id: ref(1) }
const { id } = object

</script>

<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increAbc">{{ abc }}</button>

  <div>不会自动解包：{{ object.id + 1 }}</div>
  <div>自动解包：{{ id + 1 }}</div>
</template>

<style></style>
<script>
import { ref } from 'vue';

const count = ref('abc')

console.log(count)
console.log(count.value)

export default {
  setup () {
    const setUpCount = ref(0)
    function increment () {
      setUpCount.value++
    }
    // 这里相当于把方法或者属性暴露出去，如果这里没暴露，模板中调用不到
    return {
      setUpCount,
      increment
    }
  }
}
</script>

<template>
  在模板中使用ref时，不需要添加.value，在模板中，ref会自动解包
  <div>count值：{{ setUpCount }}</div>
  <button @click="increment">{{ setUpCount }}</button>
</template>

<style></style>
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addCount () {
      this.count++
      console.log('点击了')
    }
  }

}
</script>
<template>
  <h3>可以使用v-on指令（简写为@）来监听DOM事件，并在事件触发时执行对应的JavaScript。用法：v-on:click="handler"或者@click="handler"
    事件处理器可以是：1.内联事件处理器，直接执行JavaScript语句；
    2.方法事件处理器
  </h3>
  <h3>内联事件处理器</h3>
  <button v-on:click="count++">Add</button>
  <p>count= {{ count }}</p>

  <h3>方法事件处理器</h3>
  <button v-on:click="addCount">Add</button>
  <p>count= {{ count }}</p>
</template>

<style></style>
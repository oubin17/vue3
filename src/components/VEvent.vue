<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    // vue中的e就是js中原生的Event对象
    addCount (e) {
      e.target.innerHtml = "hello"
      // e.target.innerHtml = "Add" + this.count
      this.count++
    }
  }

}
</script>
<template>
  <h3>可以使用v-on指令（简写为@）来监听DOM事件，并在事件触发时执行对应的JavaScript。用法：v-on:click="handler"或者@click="handler"
    事件处理器可以是：1.内联事件处理器，直接执行JavaScript语句；
    2.方法事件处理器
  </h3>

  <h3>方法事件处理器</h3>
  <button @click="addCount">Add</button>
  <p>count= {{ count }}</p>

  <button @click="addCount($event)">Add传递对象</button>
</template>

<style></style>
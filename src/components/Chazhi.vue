<script>
export default {
  data () {
    return {
      msg: "神奇的语法",
      message: "大家好",
      rawHtml: "<a href= '#'> a 标签 </a>",
      buttonDisable: false,
      attri: {
        id: 'appid',
        class: 'appclass'
      }
    }
  }
}
</script>
<template>
  <h3>模版语法</h3>
  <p>{{ msg }}</p>
  <p>{{ message.split("").reverse().join("") }}</p>
  <p v-html="rawHtml"></p>
  <!-- 绑定一个对象 -->
  <button v-bind="attri" v-bind:disabled="buttonDisable"> abc </button>
</template>
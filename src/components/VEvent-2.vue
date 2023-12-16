<script>
export default {
  data () {

  },
  methods: {
    clickHandle (e) {
      // 阻止默认事件
      e.preventDefault()
      console.log('点击了1')
    },
    clickHandle2 () {
      console.log('点击了2')
    },
    clickDiv () {
      console.log('点击了div')
    },
    clickP () {
      console.log('点击了p')
    }
  }
}
</script>

<template>
  <h3>事件修饰符</h3>
  <!-- click.prevent：阻止默认行为 -->
  <a @click.prevent="clickHandle2" href="www.baidu.com">链接</a>

  <!-- 阻止事件冒泡 -->
  <div @click="clickDiv">
    <p @click.stop="clickP">
      测试冒泡
    </p>
  </div>
</template>

<style></style>
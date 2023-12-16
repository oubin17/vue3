<script>
export default {
  data () {
    return {
      flag: false
    }
  }
}
</script>


<template>
  <h3>条件渲染</h3>
  <div v-if="flag">你能看见我</div>
  <div v-else>我和v-if互斥</div>
  <div v-show="flag">我是v-show，始终会渲染，是根据display切换，如果频繁切换，使用v-show，如果条件很少改变，使用v-if</div>
</template>
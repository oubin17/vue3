<script>
export default {
  data () {
    return {
      names: ['a', 'b', 'c'],
      userInfo: {
        name: 'ou',
        age: 18,
        addr: "China"
      }

    }
  }
}
</script>

<template>
  <h3>
    列表渲染
  </h3>
  <p v-for="(item, index) in names">{{ item }} - {{ index }}</p>

  <p v-for="item of names">{{ item }}</p>
  <!-- 添加key，给每条数据加上唯一索引，通过在任何时候都提供一个key，阻止vue的就地更新 -->
  <p v-for="(value, key, index) of userInfo" :key="key">{{ value }} - {{ key }} - {{ index }}</p>
</template>
<style></style>
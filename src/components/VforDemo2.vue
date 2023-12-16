<script>
export default {
  data () {
    return {
      arrList: ['第一', '第二', '第三']
    }

  },
  methods: {
    addList () {
      this.arrList.push("第四")

    }
  }
}
</script>

<template>
  <h3>测试数据变化</h3>
  <button @click="addList">添加一条数据</button>
  <ul>
    <li v-for="item in arrList"> {{ item }}</li>
  </ul>
</template>

<style></style>
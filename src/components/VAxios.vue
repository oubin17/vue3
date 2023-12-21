<script setup>
import { onMounted, ref } from 'vue'

import axios from 'axios'

const list = ref({})

const getList = async () => {
  // http://localhost:8080/hello
  axios.get('/template/hello').then(function (res) {
    console.log(res)
    list.value = res
  }).catch(function (error) {
    console.log(error)
  })

  // const res = await axios.get('/hello')
  // console.log(res)
  // list.value = res.data
}
onMounted(() => getList())

console.log(list)
</script>

<template>
  <div>获取到的对象： {{ list }}</div>
</template>

<style></style>
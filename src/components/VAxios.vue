<script setup>
import { onMounted, ref } from 'vue'

// import axios from 'axios'
import axiosUtil from '@/js/axiosUtil';

const result1 = ref(0)
const result2 = ref({})

const getList = async () => {

  result1.value = await axiosUtil.get('/template/hello')
  console.log(result1)

  result2.value = await axiosUtil.post('/template/hello', { 'name': '1' })
  console.log(result2)

}
onMounted(() => getList())
</script>

<template>
  <div>获取到的对象result1： {{ result1.result }}</div>
  <div>获取到的对象result2： {{ result2.result }}</div>
</template>

<style></style>
<script setup>
import { ref, reactive, computed } from 'vue'

const author = reactive({
  name: 'John',
  books: ['book1', 'book2', 'book3']
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const refT = ref({
  id: 1,
  name: 'ref测试'
})

// 使用ref对象的时候，需要先获取.value对象，然后再获取对象属性，这里得是ref.value.id，不能是ref.id.value
const refTCompu = computed(() => {
  console.log(refT)
  return refT.value.id > 0
})
</script>
<template>
  <!-- <p>publish books:</p>
  <span> {{ publishedBooksMessage }}</span> -->

  <div>{{ refTCompu }}</div>
</template>
<style></style>
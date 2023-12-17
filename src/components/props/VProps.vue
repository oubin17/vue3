<script setup>
import { ref } from 'vue'

// const props = defineProps(['foo'])
//  使用单个属性或者对象都可以
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  likes: Number,
  defaultValue: {
    type: String,
    default (rawProps) {
      return rawProps.title + rawProps.likes
    }
  }
})
console.log('props is:' + props)

// 显示通过defineEmits()宏声明要触发的事件
const emit = defineEmits({
  'clickEvent': null,
  'clickEventWithParams': (params1) => {
    if (params1.length > 1) {
      return true
    }
    return false
  }
})
function clickEventWithParamsForm (params1) {
  emit('clickEventWithParams', params1)
}

// 这里修改会报错，子组件只可以读取父组件的值，不可修改,如果需要修改，则需要重新创建一个
// props.title = 'abc'
const sonTitle = ref(props.title)
</script>

<template>
  <p>从props获取到的数据，title：{{ sonTitle.charAt(0) }}，likes: {{ likes }}</p>
  <p>默认值为：{{ defaultValue }}</p>
  <button @click="$emit('clickEvent')">子传父</button>
  <button @click="$emit('clickEventWithParams', '参数1')">子传父有参数</button>
  <button @click="clickEventWithParamsForm('子传父调用子组件本地方法')">子传父调用子组件本地方法</button>
</template>

<style></style>
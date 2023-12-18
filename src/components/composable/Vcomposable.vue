<script setup>
import { useMouse } from '../../js/mouse.js'

import { useFetch } from "../../js/fetch.js"

const { x, y } = useMouse()

const { data, err } = useFetch('...')
</script>

<template>
  <div>Mouse position is at : {{ x }}, {{ y }}</div>
  <div>Fetch Result : data-> {{ data }}, err -> {{ err }}</div>
</template>

<style></style>
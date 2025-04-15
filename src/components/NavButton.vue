<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  link: String,
  className: String,
})
</script>

<template>
  <RouterLink :to="props.link">
    <button :class="`${props.className}`"><slot /></button>
  </RouterLink>
</template>

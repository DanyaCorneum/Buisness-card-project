<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  link: String,
  className: String,
})
defineEmits('onClick')
</script>

<template>
  <RouterLink :to="props.link">
    <button @click="$emit('onClick')" :class="`${props.className}`"><slot /></button>
  </RouterLink>
</template>

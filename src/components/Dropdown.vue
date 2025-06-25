<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useTheme } from '@/stores/changeTheme'
defineEmits(['onClick'])
const theme = useTheme()
</script>

<template>
  <div class="dropdown">
    <button @click="$emit('onClick')">
      <img
        :src="`${theme.getTheme === 'dark' ? '/src/assets/dropdown_light.svg' : '/src/assets/dropdown.svg'}`"
        alt=""
      />
    </button>
  </div>
</template>

<style lang="scss">
button {
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
}
</style>

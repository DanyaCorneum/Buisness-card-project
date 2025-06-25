<script setup>
import { useTheme } from '@/stores/changeTheme'

const theme = useTheme()
function startAnimation() {
  theme.changeTheme()
  console.log(theme.theme)
}
</script>

<template>
  <button @click="startAnimation" class="change-theme">
    <img
      :src="`${theme.theme === 'dark' ? '/src/assets/lightbulb.svg' : '/src/assets/lightbulb-fill.svg'}`"
      alt="gear"
    />
  </button>
</template>

<style lang="scss">
@use '/src/assets/_main.scss' as *;
.change-theme {
  display: flex;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  img {
    width: $icons-width;
    height: $icons-width;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>

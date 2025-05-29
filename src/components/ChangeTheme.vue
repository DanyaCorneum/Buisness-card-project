<script setup>
import { useTheme } from '@/stores/changeTheme'

const theme = useTheme()
function startAnimation(e) {
  theme.changeTheme()
  const image = e.target
  image.classList.add('animate')
  setTimeout(() => {
    image.classList.remove('animate')
  }, 500)
  console.log(theme.theme)
}
</script>

<template>
  <button @click="startAnimation" class="change-theme">
    <img
      :src="`${theme.theme === 'light' ? '/src/assets/gear.svg' : '/src/assets/gear_white.svg'}`"
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
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    cursor: pointer;
  }
}
.animate {
  animation: change-theme 900ms none ease;
}
@keyframes change-theme {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

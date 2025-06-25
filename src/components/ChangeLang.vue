<script setup>
import { useTheme } from '@/stores/changeTheme'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = () => {
  locale.value = locale.value === 'en' ? 'ru' : 'en' 
}
const theme = useTheme()
</script>

<template>
  <img
    @click="changeLanguage"
    :src="`${theme.getTheme === 'dark' ? '/src/assets/logo_light.svg' : '/src/assets/logo.svg'}`"
    alt="change lang"
  />
</template>

<style lang="scss">
@use '/src/assets/main' as *;
img {
  width: $icons-width;
  height: $icons-width;
  &:hover {
    cursor: pointer;
  }
}
</style>

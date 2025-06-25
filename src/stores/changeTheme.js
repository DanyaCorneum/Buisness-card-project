import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTheme = defineStore('theme', () => {
  const theme = ref('dark')
  const getTheme = computed(() => theme.value)
  function changeTheme() {
    if (theme.value === 'light') {
      theme.value = 'dark'
    } else {
      theme.value = 'light'
    }
  }

  return { theme, getTheme, changeTheme }
})

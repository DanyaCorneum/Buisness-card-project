import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTheme = defineStore('theme', () => {
  const theme = ref('white')
  const getTheme = computed(() => theme.value)
  function changeTheme() {
    if (theme.value === 'white') {
      theme.value = 'black'
    } else {
      theme.value = 'white'
    }
  }

  return { theme, getTheme, changeTheme }
})

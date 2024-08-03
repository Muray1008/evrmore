import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useToolbarStore = defineStore('toolbar', () => {
  const toolbarColor = ref('grey')

  const setToolbarColor = (color: string) => {
    if (color === 'white') {
      toolbarColor.value = 'white'
    } else if (color === 'black') {
      toolbarColor.value = 'rgba(0, 0, 0, 0.87)'
    } else {
      toolbarColor.value = color
    }
  }

  const toolbarTextColor = computed(() => toolbarColor.value)

  return { toolbarColor, setToolbarColor, toolbarTextColor }
})

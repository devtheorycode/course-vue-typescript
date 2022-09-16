import { ref } from 'vue'

const showSecondsInDurations = ref<boolean>(true)

export function useOptions() {
  return {
    showSecondsInDurations
  }
}
import { ref } from 'vue'

const showSecondsInDurations = ref(true)

export function useOptions() {
  return {
    showSecondsInDurations
  }
}
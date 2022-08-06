import { watch, ref, reactive } from 'vue'
import dayjs from '../utils/dayjs'

export function useDurationSum(allDurations) {
  const exactDuration = ref()
  const rawDuration = reactive({})

  watch(allDurations.map(duration => duration.raw), () => {  
    exactDuration.value = allDurations.reduce((acc, duration) => acc.add(duration.exact.value), dayjs.duration(0))
  
    rawDuration.hours = Math.floor(exactDuration.value.asHours())
    rawDuration.minutes = exactDuration.value.minutes()
    rawDuration.seconds = exactDuration.value.seconds()
  }, { immediate: true })

  return {
    exact: exactDuration,
    raw: rawDuration
  }
}
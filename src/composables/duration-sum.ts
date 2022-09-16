import { watch, computed, reactive } from 'vue'
import type { Duration, RawDuration, DayjsDuration } from '../types/duration.types'
import dayjs from '../utils/dayjs'

export function useDurationSum(allDurations: Duration[]): Duration {
  const exactDuration = computed<DayjsDuration>(() => {
    return allDurations.reduce((acc, duration) => acc.add(duration.exact.value), dayjs.duration(0))
  })
  const rawDuration: RawDuration = reactive({} as RawDuration)

  watch(exactDuration, () => {
    rawDuration.hours = Math.floor(exactDuration.value.asHours())
    rawDuration.minutes = exactDuration.value.minutes()
    rawDuration.seconds = exactDuration.value.seconds()
  }, { immediate: true })

  return {
    exact: exactDuration,
    raw: rawDuration
  }
}
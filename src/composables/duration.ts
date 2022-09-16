import type { Duration, RawDuration, DayjsDuration } from '../types/duration.types'
import { reactive, computed } from 'vue'
import dayjs from '../utils/dayjs'

export function useDuration(rawDurationConfig: Partial<RawDuration>): Duration {

  const rawDuration: RawDuration = reactive({
    hours: rawDurationConfig?.hours ?? null,
    minutes: rawDurationConfig?.minutes ?? null,
    seconds: rawDurationConfig?.seconds ?? null,
  })

  const exactDuration = computed<DayjsDuration>(() => {
    return dayjs.duration(0)
      .add(rawDuration.hours ?? 0, 'hours')
      .add(rawDuration.minutes ?? 0, 'minutes')
      .add(rawDuration.seconds ?? 0, 'seconds')
  })

  return {
    raw: rawDuration,
    exact: exactDuration
  }
}
import type { Duration as DayjsPluginDuration } from 'dayjs/plugin/duration'
import type { ComputedRef } from 'vue'

export type DayjsDuration = DayjsPluginDuration

export type RawDuration = {
  hours: number | null
  minutes: number | null
  seconds: number | null
}

export type Duration = {
  raw: RawDuration
  exact: ComputedRef<DayjsDuration>
}

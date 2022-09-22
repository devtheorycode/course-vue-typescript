import type { Duration } from 'dayjs/plugin/duration'

export type DayjsDuration = Duration

export type RawDuration = {
  hours: number | null
  minutes: number | null
  seconds: number | null
}
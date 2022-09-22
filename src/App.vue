<script lang="ts">
import type { RawDuration, DayjsDuration } from './types/duration.types'
import { defineComponent } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import DurationPicker from './components/DurationPicker.vue'

dayjs.extend(duration)

export default defineComponent({
  components: { DurationPicker },
  data() {
    return {
      rawDurationOne: {
        hours: null,
        minutes: null,
        seconds: null,
      } as RawDuration,
      rawDurationTwo: {
        hours: null,
        minutes: null,
        seconds: null,
      } as RawDuration,
    }
  },
  computed: {
    durationOne(): DayjsDuration {
      return this.getDayjsDurationFromRaw(this.rawDurationOne)
    },
    durationTwo(): DayjsDuration {
      return this.getDayjsDurationFromRaw(this.rawDurationTwo)
    },
    rawDurationResult(): RawDuration {
      const resultDuration = dayjs.duration(0)
        .add(this.durationOne)
        .add(this.durationTwo)

      return {
        hours: Math.floor(resultDuration.asHours()),
        minutes: resultDuration.minutes(),
        seconds: resultDuration.seconds(),
      }
    }
  },
  methods: {
    getDayjsDurationFromRaw(rawDuration: RawDuration): DayjsDuration {
      return dayjs.duration(0)
        .add(rawDuration.hours ?? 0, 'hours')
        .add(rawDuration.minutes ?? 0, 'minutes')
        .add(rawDuration.seconds ?? 0, 'seconds')
    }
  },
  mounted() {
    this.$axios()
  }
})
</script>

<template>
  <div class="mt-10 text-center space-y-10">
    <h1 class="text-3xl mx-auto">Time Calculator</h1>
    <div class="inline-grid grid-cols-4 gap-4">
      <DurationPicker class="col-span-3 col-start-2" :raw-duration="rawDurationOne" />

      <span class="inline-flex justify-center items-center">+</span>
      <DurationPicker class="col-span-3" :raw-duration="rawDurationTwo" />

      <span class="col-span-4 h-0 border-t-[1px]"></span>

      <span class="inline-flex justify-center items-center">=</span>
      <DurationPicker class="col-span-3" :readonly="true" :raw-duration="rawDurationResult" />
    </div>
  </div>
</template>

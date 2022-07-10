<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import DurationPicker from './components/DurationPicker.vue'

dayjs.extend(duration)

export default {
  components: { DurationPicker },
  data() {
    return {
      durationOneValues: {
        hours: null,
        minutes: null,
        seconds: null,
      },
      durationTwoValues: {
        hours: null,
        minutes: null,
        seconds: null,
      },
    }
  },
  computed: {
    durationOne() {
      return dayjs.duration(0)
        .add(this.durationOneValues.hours, 'hours')
        .add(this.durationOneValues.minutes, 'minutes')
        .add(this.durationOneValues.seconds, 'seconds')
    },
    durationTwo() {
      return dayjs.duration(0)
        .add(this.durationTwoValues.hours, 'hours')
        .add(this.durationTwoValues.minutes, 'minutes')
        .add(this.durationTwoValues.seconds, 'seconds')
    },
    resultDurationValues() {
      const resultDuration = dayjs.duration(0)
        .add(this.durationOne)
        .add(this.durationTwo)

      return {
        hours: Math.floor(resultDuration.asHours()),
        minutes: resultDuration.minutes(),
        seconds: resultDuration.seconds(),
      }
    }
  }
}
</script>

<template>
  <div class="mt-10 text-center space-y-10">
    <h1 class="text-3xl mx-auto">Time Calculator</h1>
    <div class="inline-grid grid-cols-4 gap-4">
      <DurationPicker class="col-span-3 col-start-2" :duration="durationOneValues" />

      <span class="inline-flex justify-center items-center">+</span>
      <DurationPicker class="col-span-3" :duration="durationTwoValues" />

      <span class="col-span-4 h-0 border-t-[1px]"></span>

      <span class="inline-flex justify-center items-center">=</span>
      <DurationPicker class="col-span-3" :readonly="true" :duration="resultDurationValues" />
    </div>
  </div>
</template>

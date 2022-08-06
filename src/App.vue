<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import DurationPicker from './components/DurationPicker.vue'

dayjs.extend(duration)

export default {
  components: { DurationPicker },
  data() {
    return {
      rawDurationOne: {
        hours: null,
        minutes: null,
        seconds: null,
      },
      rawDurationTwo: {
        hours: null,
        minutes: null,
        seconds: null,
      },
    }
  },
  computed: {
    durationOne() {
      return dayjs.duration(0)
        .add(this.rawDurationOne.hours, 'hours')
        .add(this.rawDurationOne.minutes, 'minutes')
        .add(this.rawDurationOne.seconds, 'seconds')
    },
    durationTwo() {
      return dayjs.duration(0)
        .add(this.rawDurationTwo.hours, 'hours')
        .add(this.rawDurationTwo.minutes, 'minutes')
        .add(this.rawDurationTwo.seconds, 'seconds')
    },
    rawDurationResult() {
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
      <DurationPicker class="col-span-3 col-start-2" :raw-duration="rawDurationOne" />

      <span class="inline-flex justify-center items-center">+</span>
      <DurationPicker class="col-span-3" :raw-duration="rawDurationTwo" />

      <span class="col-span-4 h-0 border-t-[1px]"></span>

      <span class="inline-flex justify-center items-center">=</span>
      <DurationPicker class="col-span-3" :readonly="true" :raw-duration="rawDurationResult" />
    </div>
  </div>
</template>

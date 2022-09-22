<script lang="ts">
import type { PropType } from 'vue';
import type { RawDuration } from '../types/duration.types';
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    rawDuration: {
      type: Object as PropType<RawDuration>,
      default: {
        hours: null,
        minutes: null,
        seconds: null,
      }
    }
  }
})
</script>

<template>
  <div>
    <div class="inline-flex items-center pr-2 bg-gray-100 border border-gray-100 rounded-md text-lg text-right focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none focus-within:ring-opacity-50">
      <input type="number" v-model="rawDuration.hours" @keypress.enter="($refs.minutes as HTMLInputElement).focus()" :readonly="readonly" min="0" placeholder="0" class="timeInput">
      <span class="timeLabel">h </span>
      <input ref="minutes" type="number" v-model="rawDuration.minutes" @keypress.enter="($refs.seconds as HTMLInputElement).focus()" :readonly="readonly" min="0" max="59" placeholder="0" class="timeInput">
      <span class="timeLabel">m </span>
      <input ref="seconds" type="number" v-model="rawDuration.seconds" :readonly="readonly" min="0" max="59" placeholder="0" class="timeInput">
      <span class="timeLabel">s </span>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.timeInput {
  @apply w-12 h-10 bg-transparent m-0 p-0 transition duration-100 ease-in-out border border-transparent text-center focus:border-none focus:ring-0 focus:outline-none rounded
}

.timeLabel {
  @apply text-gray-400
}

/* Hide Arrows From Input Number */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
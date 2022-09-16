<script setup lang="ts">
import DurationPicker from './components/DurationPicker.vue'
import Options from './components/Options.vue'
import { useDuration } from './composables/duration';
import { useDurationSum } from './composables/duration-sum';

// Variables for the DurationPicker inputs
const durationOne = useDuration({ hours: 3 })
const durationTwo = useDuration({ minutes: 54 })

// Calculation of the resulting time for the DurationPicker inputs
const { raw: rawDurationResult } = useDurationSum([durationOne, durationTwo])
</script>

<template>
  <div class="mt-10 text-center space-y-10">
    <h1 class="text-3xl mx-auto">Time Calculator</h1>

    <Options />

    <div class="inline-grid grid-cols-4 gap-4">
      <DurationPicker class="col-span-3 col-start-2" :raw-duration="durationOne.raw" />

      <span class="inline-flex justify-center items-center">+</span>
      <DurationPicker class="col-span-3" :raw-duration="durationTwo.raw" />

      <span class="col-span-4 h-0 border-t-[1px]"></span>

      <span class="inline-flex justify-center items-center">=</span>
      <DurationPicker class="col-span-3" :readonly="true" :raw-duration="rawDurationResult" />
    </div>
  </div>
</template>

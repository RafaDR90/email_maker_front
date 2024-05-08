<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  minValue: { type: Number, default: 0 },
  maxValue: { type: Number, default: 100 },
});

const value = ref(50);
const minValue = ref(props.minValue);
const maxValue = ref(props.maxValue);
</script>

<template>
  <div class="PB-range-slider-div">
    <input
      type="range"
      :min="minValue"
      :max="maxValue"
      v-model="value"
      class="PB-range-slider"
      id="myRange"
    />
    <p class="PB-range-slidervalue">{{ value }}px</p>
  </div>
</template>

<style scoped>
.PB-range-slider {
  @apply w-full h-1 opacity-70 transition-opacity duration-[0.2s] rounded-[5px] bg-indigo-200 outline-none appearance-none;
  transition: 0.2s;
}
.PB-range-slider::-webkit-slider-thumb {
  @apply appearance-none w-[15px] h-[15px] appearance-none bg-indigo-950 cursor-pointer transition-[0.3s] duration-[ease-in-out] rounded-[50%] hover:shadow-[0px_0px_0px_8px_rgba(0,0,0,0.16)] hover:transition-[0.3s] hover:duration-[ease-in-out];
}
.PB-range-slider::-moz-range-thumb {
  @apply w-[15px] h-[15px] bg-black cursor-pointer rounded-[50%];
}
.PB-range-slider-div {
  @apply flex w-full items-center justify-center gap-4  shadow-sm p-4 rounded-md bg-indigo-400 border-solid;
}
.PB-range-slidervalue {
  @apply font-semibold;
}
</style>
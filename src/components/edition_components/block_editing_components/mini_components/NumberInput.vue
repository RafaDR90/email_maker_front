<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  value: { type: Number, default: 0 },
  valueUpdate: { type: Function, default: () => {} },
});

const text = ref(props.value);

let timeoutId = null;
watch(text, (newValue) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    props.valueUpdate(newValue);
  }, 250);
});
</script>

<template>
  <div class="w-full">
    <input type="number" class="custom-input text-center" v-model="text" />
  </div>
</template>

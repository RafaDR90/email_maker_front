<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  value: { type: Number, default: ref(0) },
  valueUpdate: { type: Function, default: () => {} },
});

const number = ref(props.value);

watch(props, (newVal) => {
  number.value = props.value;
});

let timeoutId = null;
watch(number, (newValue) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    props.valueUpdate(newValue);
  }, 250);
});

watch(props, ()=>{
  number.value = props.value;
})
</script>

<template>
  <div class="w-full">
    <input type="number" class="custom-input text-center" v-model="number" />
  </div>
</template>

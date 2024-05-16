<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  numberValue: { type: Number, default: ref(0) },
  valueUpdate: { type: Function, default: () => {} },
});

const number = ref(props.numberValue);

watch(props.numberValue, (newVal) => {
  number.value = props.numberValue;
  console.log(props.numberValue);
  console.log(newVal);
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
  number.value = props.numberValue;
  console.log(props.numberValue);
})
</script>

<template>
  <div class="w-full">
    <input type="number" class="custom-input text-center" v-model="number" />
  </div>
</template>

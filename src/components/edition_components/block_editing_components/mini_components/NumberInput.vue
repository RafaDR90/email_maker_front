<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  value: { type: Number, default: ref(0) },
  valueUpdate: { type: Function, default: () => {} },
});

const text = ref(props.value);

watch(props.value, (newVal) => {
  text.value = props.value;
  console.log(props.value);
  console.log(newVal);
});

let timeoutId = null;
watch(text, (newValue) => {
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
    <input type="number" class="custom-input text-center" v-model="text" />
  </div>
</template>

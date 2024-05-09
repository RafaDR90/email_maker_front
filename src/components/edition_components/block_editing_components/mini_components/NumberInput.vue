<script setup>
import { ref, defineEmits, defineProps, watch } from "vue";

const emits = defineEmits(["update:value"]);

const props = defineProps({
  value: { type: Number, default: 16 },
  valueUpdate: { type: Function, default: () => {} },
});



const number = ref(props.value);

let timeoutId = null;
watch(
  () => number.value,
  (newValue) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      props.valueUpdate(newValue);
    }, 250);
  }
);
</script>

<template>
  <div class="w-full">
    <input
      type="number"
      class="custom-input text-center"
      v-model="number"
    />
  </div>
</template>

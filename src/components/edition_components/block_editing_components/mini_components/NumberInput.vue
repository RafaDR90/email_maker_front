<script setup>
import { ref, defineEmits, defineProps } from "vue";

const emits = defineEmits(["update:value"]);

const props = defineProps({
  value: { type: Number, default: 16 },
});

const number = ref(props.value);

function emitUpdate(newValue) {
  // Si el valor es menor que 0, establecerlo a 0
  number.value = Math.max(0, newValue);
  emits("update:value", newValue);
}
</script>

<template>
  <div class="w-full">
    <input
      type="number"
      class="custom-input text-center"
      v-model="number"
      @input="emitUpdate(number)"
    />
  </div>
</template>

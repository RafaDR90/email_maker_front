<script setup>
import { ref, defineEmits } from "vue";

const fontSize = ref(12);
const emits = defineEmits("updateFontSize");

function emitUpdate(newSize) {
  emits("updateFontSize", newSize);
}
</script>

<template>
  <div class="size-full">
    <input
      type="number"
      class="custom-input text-center"
      v-model="fontSize"
      @input="emitUpdate(fontSize)"
    />
  </div>
</template>

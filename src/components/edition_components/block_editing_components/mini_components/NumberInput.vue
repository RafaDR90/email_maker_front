<script setup>
import { ref, defineEmits } from "vue";

const number = ref(0);
const emits = defineEmits(['updateNumber']);

function emitUpdate() {
  emits("updateNumber");
}
</script>

<template>
  <div class="w-full">
    <input
      type="number"
      class="custom-input text-center"
      v-model="number"
      @input="emitUpdate()"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  gridColumns: { type: Number, default: 3 },
});
</script>

<template>
  <div
    class="grid gap-1 w-full border border-green-200"
    :style="{ 'grid-template-columns': `repeat(${props.gridColumns}, 1fr)` }"
  >
    <slot />
  </div>
</template>

<style scoped>
</style>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  gridConfiguration: {
    type: Object,
    default: {
      gridColumns: 3,
      gridSpans: [1, 1, 1],
    },
  },
});
</script>

<template>
  <div
    class="grid gap-2 w-full"
    :style="{
      'grid-template-columns': `repeat(${props.gridConfiguration.gridColumns}, 1fr)`,
      'grid-auto-rows': 'minmax(100px, auto)',
    }"
  >
    <slot />
  </div>
</template>

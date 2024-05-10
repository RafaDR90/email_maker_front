<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  gridConfiguration: {
    type: Object,
    default: {
      gridColumns: 3,
      gridSpans: [1, 1, 1],
    },
  },
});

const gridTemplateColumns = computed(() => {
  return `${gridSpansFormatted(props.gridConfiguration)}`;
});

function gridSpansFormatted(gridConfiguration) {
  if (gridConfiguration.gridSpans) {
    return gridConfiguration.gridSpans.map((span) => span + "fr").join(" ");
  }
}
</script>

<template>
  <div
    class="grid gap-2 w-full"
    :style="{
      'grid-template-columns': gridTemplateColumns,
      'grid-auto-rows': 'minmax(0px, auto)',
    }"
  >
    <slot />
  </div>
</template>

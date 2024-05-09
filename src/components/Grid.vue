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

const calculateColumn = (index) => {
  let column = 1;
  for (let i = 0; i < index % props.gridConfiguration.gridColumns; i++) {
    column += props.gridConfiguration.gridSpans[i];
  }
  return column;
};
</script>

<template>
  <div
    class="grid gap-1 w-full border border-green-200"
    :style="{
      'grid-template-columns': `repeat(${props.gridConfiguration.gridColumns}, 1fr)`,
      'grid-template-rows': '1fr auto ',
    }"
  >
  <div
      v-for="(item, index) in $slots.default()"
      :key="index"
      class="border-4 border-green-600"
      :style="{
        'grid-column': `${calculateColumn(index)} / span ${item.props.columnSpan}`,
        'grid-row': `${
          Math.floor(index / props.gridConfiguration.gridColumns) + 1
        } / span 1`,
      }"
    >
      <slot :name="index" />
    </div>
  </div>
</template>

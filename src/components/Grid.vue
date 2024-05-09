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
      'grid-auto-rows': 'minmax(100px, auto)',
    }"
  >
<!--
      <template v-if="$slots.default()">
      <div
        v-for="(item, index) in $slots.default()"
        :key="index"
        class="border-4 border-green-600 h-32"
        :style="{
          'grid-column': `${calculateColumn(index)} / span ${item.props.columnSpan}`,
          'grid-row': `${Math.ceil((index + 1) / props.gridConfiguration.gridColumns)} / span 1`, // Ajustar el cálculo de fila
        }"
      >
        <slot :name="index" />
      </div>
    </template>
-->
  </div>
</template>

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
  <div>
    
  </div>
</template>

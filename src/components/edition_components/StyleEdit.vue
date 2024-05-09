<script setup>
import GridOptions from "./style_editing_components/GridOptions.vue";

import { ref } from "vue";
import { useStyleVars } from "../../store/StyleVars";

const styleStore = useStyleVars();

const gridConfiguration = ref(styleStore.gridConfiguration);
</script>


<template>
  <div class="w-[25%] bg-indigo-100 dark:bg-indigo-950">
    <GridOptions :gridConfiguration="gridConfiguration" :setGridConfiguration="styleStore.setGridConfiguration"/>
  </div>
</template>
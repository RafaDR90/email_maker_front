<script setup>
import GridOptions from "./style_editing_components/GridOptions.vue";
import ActionButtons from "./style_editing_components/ActionButtons.vue";

import { ref } from "vue";
import { useStyleVars } from "../../store/StyleVars";

const styleStore = useStyleVars();

const gridConfiguration = ref(styleStore.gridConfiguration);
</script>


<template>
  <div class="w-[25%] bg-indigo-100 dark:bg-indigo-950 flex flex-col justify-between">
    <div>
      <GridOptions :gridConfiguration="gridConfiguration" :setGridConfiguration="styleStore.setGridConfiguration"/>
    </div>
    <ActionButtons />
  </div>
</template>
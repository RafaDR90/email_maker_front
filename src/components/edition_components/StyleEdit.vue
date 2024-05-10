<script setup>
import GridOptions from "./style_editing_components/GridOptions.vue";
import GridOptionsAlt from "./style_editing_components/GridOptionsAlt.vue";
import ActionButtons from "./style_editing_components/ActionButtons.vue";

import { ref } from "vue";
import { useStyleVars } from "../../store/StyleVars";

const styleStore = useStyleVars();

const gridConfiguration = ref(styleStore.gridConfiguration);
</script>


<template>
  <div class="w-[25%] h-[calc(100vh-4rem)] bg-indigo-100 dark:bg-indigo-950 flex flex-col justify-between shadow-md z-20 overflow-auto">
    <div>
      <!--<GridOptions :gridConfiguration="gridConfiguration" :setGridConfiguration="styleStore.setGridConfiguration"/>-->
      <GridOptionsAlt />
    </div>
    <ActionButtons />
  </div>
</template>
import { defineStore } from "pinia";

export const useStyleVars = defineStore({
  id: "styleVars",
  state: () => {
    return {
      gridConfiguration: {
        gridColumns: 3,
        gridSpans: [1, 1, 1],
      },
    };
  },
  actions: {
    setGridConfiguration(gridConfiguration) {
      if (gridConfiguration) {
        this.gridConfiguration = gridConfiguration;
      }
    },
  },
});

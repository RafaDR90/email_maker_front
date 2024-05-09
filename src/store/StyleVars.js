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

        if (Array.isArray(gridConfiguration.gridSpans)) {
          if (gridConfiguration.gridSpans.length < gridConfiguration.gridColumns) {
            for (let i = gridConfiguration.gridSpans.length; i < gridConfiguration.gridColumns; i++) {
                this.gridConfiguration.gridSpans.push(0);
            }
          }
        } else {
          console.error(
            "Error en setGridConfiguration"
          );
        }
      }
    },
  },
});

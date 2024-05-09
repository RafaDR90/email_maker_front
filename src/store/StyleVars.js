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
              this.gridConfiguration.gridSpans.add(0);
            }
          }
        } else {
          console.error(
            "listSpans debe ser una lista con al menos tres elementos."
          );
        }
      }
    },
    /*
    setGridConfiguration(gridColumns, listSpans) {
      this.gridConfiguration.gridColumns = gridColumns || 3;

      if (Array.isArray(listSpans)) {
        this.gridSpans = listSpans;

        if (listSpans.length < gridColumns) {
          for (let i = listSpans.length; i < gridColumns; i++) {
            this.gridSpans.add(0);
          }
        }
      } else {
        console.error(
          "listSpans debe ser una lista con al menos tres elementos."
        );
      }
    },
    */
  },
});

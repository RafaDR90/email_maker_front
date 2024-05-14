import { defineStore } from "pinia";

export const useBannerVars = defineStore({
  id: "bannerVars",
  state: () => {
    return {
      bannerUrl: "",
      bannerColor: "#FFFFFF",
      marginBottom: 0,
      bottomBannerUrl: "",
      bottomBannerColor: "#FFFFFF",
      bottomBannerMarginBottom: 0,
    };
  },
  actions: {
    setBannerUrl(url) {
      this.bannerUrl = url;
    },
    setBannerColor(color) {
      this.bannerColor = color;
    },
    setMarginBottom(margin) {
      this.marginBottom = margin;
    },
    setBottomBannerUrl(url) {
      this.bottomBannerUrl = url;
    },
    setBottomBannerColor(color) {
      this.bottomBannerColor = color;
    },
    setBottomBannerMarginBottom(margin) {
      this.bottomBannerMarginBottom = margin;
    },
  },
});

import { defineStore } from "pinia";

export const useBannerVars = defineStore({
  id: "bannerVars",
  state: () => {
    return {
      topImgBannerUrl: "",
      topBannerUrl: "",
      bannerColor: "#FFFFFF",
      marginBottom: 0,
      bottomImgBannerUrl: "",
      bottomBannerUrl: "",
      bottomBannerColor: "#FFFFFF",
      bottomBannerMarginBottom: 0,
    };
  },
  actions: {
    setTopImgBannerUrl(url) {
      this.topImgBannerUrl = url;
    },
    setTopBannerUrl(url) {
      this.topBannerUrl = url;
    },
    setBannerColor(color) {
      this.bannerColor = color;
    },
    setMarginBottom(margin) {
      this.marginBottom = margin;
    },
    setBottomImgBannerUrl(url) {
      this.bottomImgBannerUrl = url;
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

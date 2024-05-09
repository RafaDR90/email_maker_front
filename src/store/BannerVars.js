import { defineStore } from 'pinia'

export const useBannerVars = defineStore({
    id: 'bannerVars',
    state: () => {
        return {
            bannerUrl: '',
            bannerColor: '',
            marginBottom: 0,
        }
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
        }
    }
})
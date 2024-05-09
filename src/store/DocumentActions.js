import { defineStore } from 'pinia'

export const documentActions = defineStore({
    id: 'documentActions',
    state: () => {
        return {
            downloadHtmlEmit: true,
        }
    },
    actions: {
        downloadHtml() {
            this.downloadHtmlEmit = !this.downloadHtmlEmit;
        }
    }
})
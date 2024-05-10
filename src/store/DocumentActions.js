import { defineStore } from 'pinia'

export const documentActions = defineStore({
    id: 'documentActions',
    state: () => {
        return {
            downloadHtmlEmit: true,
            selectedBlock: 'banner',
            selectedCard: null,
        }
    },
    actions: {
        downloadHtml() {
            this.downloadHtmlEmit = !this.downloadHtmlEmit;
        },
        updateSelectedBlock(block){
            this.selectedBlock = block;
        },
        updateSelectedCard(card){
            this.selectedCard = card;
        }
    }
})
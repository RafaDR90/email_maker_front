import { defineStore } from 'pinia'

export const documentActions = defineStore({
    id: 'documentActions',
    state: () => {
        return {
            downloadHtmlEmit: true,
            selectedBlock: null,
            selectedCard: null,
            addProductModal: true,
            creatingSvg: false,
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
        },
        setAddProductModal(status){
            this.addProductModal = status;
        },
        setCreatingSvg(status){
            this.creatingSvg = status;
        }
    }
})
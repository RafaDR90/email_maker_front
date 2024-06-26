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
            error: null,
            errorTimeout: null,
            exito: null,
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
        },
        setError(error){
            if(this.errorTimeout){
                clearTimeout(this.errorTimeout);
                this.exito = null;
            }
            this.error = error;
            this.errorTimeout = setTimeout(() => {
                this.error = null;
            }, 6000);
        },
        setExito(exito){
            if(this.errorTimeout){
                clearTimeout(this.errorTimeout);
                this.error = null;
            }
            this.exito = exito;
            this.errorTimeout = setTimeout(() => {
                this.exito = null;
            }, 6000);
        }
    }
})
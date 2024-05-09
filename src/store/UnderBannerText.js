import { defineStore } from 'pinia'

export const underBannerTextVars = defineStore({
    id: 'underBannerTextVars',
    state: () => {
        return {
            text: '',
            font: 'Roboto',
            fontSize: 16,
            weight: 100,
            height: 40
        }
    },
    actions: {
        setText(text) {
            this.text = text
        },
        setFont(font) {
            this.font = font
        },
        setFontSize(fontSize) {
            this.fontSize = fontSize
        },
        setWeight(weight) {
            this.weight = weight
        },
        setHeight(height) {
            this.height = height
        },
    }
})
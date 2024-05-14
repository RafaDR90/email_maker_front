import { defineStore } from 'pinia'

export const cardStyle = defineStore({
    id: 'cardStyle',
    state: () => {
        return {
            //generales
            cardBg: "#FFFFFF",
            border: true,
            borderColor: "#000000",
            //titulo
            titleFont: "la fuente la pones tu------------------------------------------------------------------------------------------------",
            fontSizeTitle: 20,
            titleColor: "#000000",
            titleBold: true,
            //precio
            priceFont: "la fuente la pones tu------------------------------------------------------------------------------------------------",
            priceColor: "#000000",
            fontSizePrice: 20,
            priceBold: true,
            colorOldPrice: "#000000",
            //botton
            buttonBg: "#FF0000",
            buttonPadding: 10,
            buttonFont: "la fuente la pones tu------------------------------------------------------------------------------------------------",
            buttonTextColor: "#FFFFFF",
            buttonFontSize: 20,
        }
    },
    actions: {
        setCardBg(color) {
            this.cardBg = color;
        },
        setBorder(border) {
            this.border = border;
        },
        setBorderColor(color) {
            this.borderColor = color;
        },
        setTitleFont(font) {
            this.titleFont = font;
        },
        setFontSizeTitle(size) {
            this.fontSizeTitle = size;
        },
        setTitleColor(color) {
            this.titleColor = color;
        },
        setTitleBold(bold) {
            this.titleBold = bold;
        },
        setPriceFont(font) {
            this.priceFont = font;
        },
        setPriceColor(color) {
            this.priceColor = color;
        },
        setFontSizePrice(size) {
            this.fontSizePrice = size;
        },
        setPriceBold(bold) {
            this.priceBold = bold;
        },
        setColorOldPrice(color) {
            this.colorOldPrice = color;
        },
        setButtonBg(color) {
            this.buttonBg = color;
        },
        setButtonPadding(padding) {
            this.buttonPadding = padding;
        },
        setButtonFont(font) {
            this.buttonFont = font;
        },
        setButtonTextColor(color) {
            this.buttonTextColor = color;
        },
        setButtonFontSize(size) {
            this.buttonFontSize = size;
        }
    }
})
import { defineStore } from 'pinia'

export const cardStyle = defineStore({
    id: 'cardStyle',
    state: () => {
        return {
            //generales
            cardHeight: 460,
            cardBgActive: false,
            cardBg: "#FFFFFF",
            border: false,
            borderColor: "#000000",
            priceInvert: false,
            cardInverted: false,
            //titulo
            titleFont: "la fuente la pones tu------------------------------------------------------------------------------------------------",
            fontSizeTitle: 20,
            titleColor: "#000000",
            titleBold: true,
            //precio
            priceFont: "la fuente la pones tu------------------------------------------------------------------------------------------------",
            priceColor: "#0000ff",
            fontSizePrice: 30,
            priceBold: true,
            colorOldPrice: "#000000",
            oldPriceSize: 20,
            //botton
            buttonBg: "#ff0000",
            buttonPadding: 10,
            buttonFont: "la fuente la pones tu------------------------------------------------------------------------------------------------",
            buttonTextColor: "#ffffff",
            buttonFontSize: 18,
            buttonBold: true,
            buttonRounded: true,
            buttonPosition: "center"
        }
    },
    actions: {
        setCardBgActive(satus) {
            this.cardBgActive = satus;
        },
        setCardBg(color) {
            this.cardBg = color;
        },
        setInvertedCard(inverted) {
            this.cardInverted = inverted;
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
        },
        setOldPriceSize(size) {
            this.oldPriceSize = size;
        },
        setCardHeight(height) {
            this.cardHeight = height;
        },
        setPriceInvert(status) {
            this.priceInvert = status;
        },
        setButtonPosition(position) {
            this.buttonPosition = position;
        },
    }
})
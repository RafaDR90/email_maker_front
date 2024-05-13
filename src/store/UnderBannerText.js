import { defineStore } from "pinia";
import { useEmailVars } from "./EmailVars";

export const underBannerTextVars = defineStore({
  id: "underBannerTextVars",
  state: () => {
    const emailStore = useEmailVars();
   // const selectedFont = ref(emailStore.fonts[1]);


    return {
      text: "{Introduce texto}",
      fonts: emailStore.fonts,
      font: emailStore.fonts[1],
      fontSize: 16,
      weight: false,
      height: 40,
      color: "#000000",
      bgColor: "#FFFFFF",
    };
  },
  actions: {
    setText(text) {
      this.text = text;
    },
    addFont(font) {
      this.fonts.add(font);
    },
    setFont(font) {
      this.font = font;
    },
    setFontSize(fontSize) {
      this.fontSize = fontSize;
    },
    setWeight(weight) {
      this.weight = weight;
    },
    setHeight(height) {
      this.height = height;
    },
    setColor(color) {
      this.color = color;
    },
    setBgColor(bgColor) {
      this.bgColor = bgColor;
    },
  },
});


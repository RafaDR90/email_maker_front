import { defineStore } from "pinia";
import { ref } from "vue";
import { emailVars } from "./EmailVars";

export const underBannerTextVars = defineStore({
  id: "underBannerTextVars",
  state: () => {
    const emailStore = emailVars();
    const selectedFont = ref(emailStore.fonts[1]);

    return {
      text: "{Introduce texto}",
      fonts: emailStore.fonts,
      font: selectedFont,
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

function getAvailableFonts() {
  const styleSheets = document.styleSheets;
  const fontFamilies = new Set();

  // Iterar sobre todas las hojas de estilo para buscar las fuentes utilizadas
  for (const styleSheet of styleSheets) {
    try {
      const rules = styleSheet.cssRules || styleSheet.rules;
      if (!rules) continue;

      for (const rule of rules) {
        if (rule instanceof CSSFontFaceRule) {
          const fontFamily = rule.style.fontFamily;
          const fontSrc = rule.style.src;
          const fontWeight = rule.style.fontWeight;
          const fontStyle = rule.style.fontStyle;

          fontFamilies.add({ fontFamily, fontSrc, fontWeight, fontStyle });
        }
      }
    } catch (error) {
      console.error("Error al acceder a las reglas de CSS:", error);
    }
  }

  // Convertir el conjunto de fuentes a un array y ordenarlo alfabéticamente
  return Array.from(fontFamilies).sort((a, b) =>
    a.fontFamily.localeCompare(b.fontFamily)
  );
}

import { defineStore } from "pinia";

export const useEmailVars = defineStore({
  id: "emailVars",
  state: () => {
    const fonts = getAvailableFonts();
    const systemFont = fonts[1];

    return {
      emailSubject: "Asunto",
      fonts: fonts,
      generalFont: systemFont,
      emailSubjectFont: systemFont,
      bgColor: "#FFFFFF",
    };
  },
  actions: {
    addFont(font) {
      this.fonts.add(font);
    },
    setFonts(font) {
      this.fonts.add(font);
    },
    setGeneralFont(font) {
      this.generalFont = font.value;
      this.emailSubjectFont = font.value;
      document.getElementById("emailContainer").style.fontFamily =
        font.value.fontFamily;
    },
    setBgColor(bgColor) {
      this.bgColor = bgColor;
    },
    setEmailSubjectFont(emailSubjectFont) {
      this.emailSubjectFont = emailSubjectFont;
      document.getElementById("emailSubject").style.fontFamily =
        emailSubjectFont.value.fontFamily;
    },
    setEmailSubject(emailSubject) {
      this.emailSubject = emailSubject;
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
  return Array.from(fontFamilies).sort((a, b) => {
    if (a && b && a.fontFamily && b.fontFamily) {
      return a.fontFamily.localeCompare(b.fontFamily);
    } else {
      return 0;
    }
  });
}

<script setup>
import { ref, onMounted } from "vue";

import NumberInput from "./mini_components/NumberInput.vue";

const text = ref("");
const selectedFont = ref("Roboto");
const availableFonts = ref([]);
const fontSize = ref(12);
const textHeight = ref(30);
const fontWeight = ref(400);
// Función para obtener las fuentes disponibles desde CSS
const getAvailableFonts = () => {
  const styleSheets = document.styleSheets;
  const fontFamilies = new Set();

  // Iterar sobre todas las hojas de estilo para buscar las fuentes utilizadas
  for (const styleSheet of styleSheets) {
    try {
      const rules = styleSheet.cssRules || styleSheet.rules;
      if (!rules) continue;

      for (const rule of rules) {
        if (rule instanceof CSSFontFaceRule) {
          fontFamilies.add(rule.style.fontFamily);
        }
      }
    } catch (error) {
      console.error("Error al acceder a las reglas de CSS:", error);
    }
  }

  // Convertir el conjunto de fuentes a un array y ordenarlo alfabéticamente
  availableFonts.value = Array.from(fontFamilies).sort();
};

// Llamar a la función para obtener las fuentes disponibles cuando el componente está montado
onMounted(() => {
  getAvailableFonts();
});

const handleFontSizeUpdate = (updatedSize) => {
  fontSize.value = updatedSize;
};

const handleTextHeightSizeUpdate = (updatedHeight) => {
  textHeight.value = updatedHeight;
};
const handleFontWeightUpdate = (updatedWeight) => {
  fontWeight.value = updatedWeight;
};
</script>

<template>
  <div class="blockEditItem">
    <h2 class="font-bold">Texto</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Texto:</h3>
    <textarea
      class="custom-input text-sm max-h-36 min-h-9"
      placeholder="Introduce texto"
      v-model="text"
    />

    <!-- Font selector -->
    <h3>Fuente:</h3>
    <div class="w-full">
      <select
        id="fontSelect"
        class="custom-input text-sm"
        v-model="selectedFont"
      >
        <option
          v-for="(font, index) in availableFonts"
          :key="index"
          :value="font"
        >
          {{ font }}
        </option>
      </select>
    </div>

    <!-- Font size -->
    <h3>Tamaño de la fuente:</h3>
    <NumberInput class="w-fit" @updateNumber="handleFontSizeUpdate" />

    <!-- Intensidad de la fuente -->
    <h3>Intensidad de la fuente:</h3>
    <NumberInput class="w-fit" @updateNumber="handleFontWeightUpdate" />

    <!-- Altura -->
    <h3>Altura:</h3>
    <NumberInput class="w-fit" @updateNumber="handleTextHeightSizeUpdate" />
  </div>
</template>

<style scoped>
</style>
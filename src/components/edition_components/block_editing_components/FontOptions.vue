<script setup>
import { ref, onMounted, defineEmits, defineProps } from "vue";
import Slider from "./mini_components/Slider.vue";
import NumberInput from "./mini_components/NumberInput.vue";

const emits = defineEmits([
  "update:fontWeight",
  "update:fontSize",
  "update:textHeight",
  "update:text",
  "update:fontSelected",
]);

const props = defineProps({
  underBannerTextFontWeight: Number,
  underBannerTextFontSize: Number,
  underBannerText: String,
  underBannerTextHeight: Number,
  underBannerSelectedFont: Object,
  underBannerTextFontSize: Number,
});
const text = ref(props.underBannerText);
const selectedFont = ref(props.underBannerSelectedFont);
const availableFonts = ref([]);
const fontSize = ref(props.underBannerTextFontSize || 16);
const textHeight = ref(props.underBannerTextHeight || 43);
const fontWeight = ref(props.underBannerTextFontWeight || 200);

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
  availableFonts.value = Array.from(fontFamilies).sort((a, b) =>
    a.fontFamily.localeCompare(b.fontFamily)
  );
};

// Llamar a la función para obtener las fuentes disponibles cuando el componente está montado
onMounted(() => {
  getAvailableFonts();
});

const handleFontSizeUpdate = (updatedSize) => {
  emits("update:fontSize", Number(updatedSize));
};

const handleTextHeightSizeUpdate = (updatedHeight) => {
  emits("update:textHeight", Number(updatedHeight));
};
const handleFontWeightUpdate = (updatedWeight) => {
  emits("update:fontWeight", Number(updatedWeight));
};

function handleSelectedFont(selectedFont) {
  emits("update:fontSelected", selectedFont);
}

const handleTextUpdate = (updatedText) => {
  text.value = updatedText;
  emits("update:text", updatedText);
};
</script>

<template>
  <div class="blockEditItem">
    <h2>Texto</h2>
    <div class="divider" />
    <!-- Img URL -->
    <h3>Texto:</h3>
    <textarea
      class="custom-input text-sm max-h-36 min-h-9"
      placeholder="Introduce texto"
      v-model="text"
      @input="handleTextUpdate(text)"
    />

    <!-- Font selector -->
    <h3>Fuente:</h3>
    <div class="w-full">
      <select
        id="fontSelect"
        class="custom-input text-sm"
        v-model="selectedFont"
        @change="handleSelectedFont(selectedFont)"
      >
        <option
          v-for="(font, index) in availableFonts"
          :key="index"
          :value="font"
        >
          {{ font.fontFamily }}
        </option>
      </select>
    </div>

    <!-- Font size -->
    <h3>Tamaño de la fuente:</h3>
    <NumberInput
      class="w-fit"
      :value="fontSize"
      @update:value="handleFontSizeUpdate"
    />

    <!-- Intensidad de la fuente -->
    <h3>Intensidad de la fuente:</h3>
    <Slider
      class="mb-4"
      :value="fontWeight"
      :maxValue="900"
      :step="100"
      @update:value="handleFontWeightUpdate"
    />

    <!-- Altura -->
    <h3>Altura:</h3>
    <NumberInput
      class="w-fit"
      :value="textHeight"
      @update:value="handleTextHeightSizeUpdate"
    />
  </div>
</template>

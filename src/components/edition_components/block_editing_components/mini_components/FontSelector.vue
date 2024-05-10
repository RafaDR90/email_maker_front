<script setup>
import { watch, defineProps, ref } from "vue";

const props = defineProps({
  selectedFont: Object,
  fontsList: Object,
  updateFont: { type: Function, default: () => {} },
});

const selectedFont = ref(props.selectedFont);

watch(selectedFont, () => {
  props.updateFont(selectedFont);
});
</script>

<template>
  <div class="w-full">
    <select
      id="fontSelect"
      class="custom-input text-sm"
      v-model="selectedFont"
      :selected="selectedFont.value"
    >
      <option
        v-for="(font, index) in props.fontsList"
        :key="index"
        :value="font"
      >
        {{ font.fontFamily }}
      </option>
    </select>
  </div>
</template>
    

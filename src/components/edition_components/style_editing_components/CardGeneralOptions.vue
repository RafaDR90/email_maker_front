<script setup>
import ColorPicker from "../block_editing_components/mini_components/ColorPicker.vue";
import colorPicker from "../block_editing_components/mini_components/ColorPicker.vue";
import DropDownComp from "../block_editing_components/mini_components/DropDownComp.vue";
import NumberInput from "../block_editing_components/mini_components/NumberInput.vue";
import Checkbox from "../block_editing_components/mini_components/CheckBox.vue";
import Slider from "../block_editing_components/mini_components/Slider.vue";
import { cardStyle } from "../../../store/CardStyle";
import { watch, ref } from "vue";

const cardStyleStore = cardStyle();

const cardBgOption = ref(cardStyleStore.cardBgActive);
watch(
  () => cardBgOption.value,
  () => {
    cardStyleStore.setCardBgActive(cardBgOption.value);
  }
);

const cardBorderOption = ref(cardStyleStore.border);
watch(
  () => cardBorderOption.value,
  () => {
    cardStyleStore.setBorder(cardBorderOption.value);
  }
);

const priceInvertOption = ref(cardStyleStore.priceInvert);
watch(
  () => priceInvertOption.value,
  () => {
    cardStyleStore.setPriceInvert(priceInvertOption.value);
  }
);
</script>

<template>
  <DropDownComp :buttonText="'Opciones de las tarjetas'" :isOpen="false">
    <div class="styleEditItem">
      <h3>Tamaño de tarjeta</h3>
      <Slider :value="cardStyleStore.cardHeight" :valueUpdate="cardStyleStore.setCardHeight" :minValue="400"
        :maxValue="600" :step="10" />
      <div class="flex items-center">
        <input class="custom-checkbox" type="checkbox" v-model="cardBgOption" />
        <h3 class="">Color de fondo:</h3>
      </div>
      <ColorPicker v-if="cardBgOption" :value="cardStyleStore.cardBg" :valueUpdate="cardStyleStore.setCardBg" />
    </div>
    <div class="styleEditItem">
      <div class="flex items-center">
        <input class="custom-checkbox" type="checkbox" v-model="cardBorderOption" />

        <h3 class="">Borde:</h3>
      </div>
      <ColorPicker v-if="cardBorderOption" :value="cardStyleStore.borderColor"
        :valueUpdate="cardStyleStore.setBorderColor" />
    </div>
    <div class="styleEditItem">
      <h2 class="mt-4">Título</h2>
      <div class="divider" />
      <h3 class="mt-0">Tamaño del titulo:</h3>
      <NumberInput :value="cardStyleStore.fontSizeTitle" :valueUpdate="cardStyleStore.setFontSizeTitle" />

      <h3 class="">Color del titulo:</h3>
      <ColorPicker :value="cardStyleStore.titleColor" :valueUpdate="cardStyleStore.setTitleColor" />

      <Checkbox :value="cardStyleStore.titleBold" :valueUpdate="cardStyleStore.setTitleBold" />
    </div>
    <div class="styleEditItem">
      <h2>Precio</h2>
      <div class="divider" />
      <h3 class="mt-0">Tamaño del precio:</h3>
      <NumberInput :value="cardStyleStore.fontSizePrice" :valueUpdate="cardStyleStore.setFontSizePrice" />
      <h3>Tamaño del precio cancelado:</h3>
      <NumberInput :value="cardStyleStore.oldPriceSize" :valueUpdate="cardStyleStore.setOldPriceSize" />
      <h3>Color del precio:</h3>
      <ColorPicker :value="cardStyleStore.priceColor" :valueUpdate="cardStyleStore.setPriceColor" />
      <h3>Color de precio cancelado:</h3>
      <ColorPicker :value="cardStyleStore.colorOldPrice" :valueUpdate="cardStyleStore.setColorOldPrice" />
      <div class="flex items-center">
        <input class="custom-checkbox" type="checkbox" v-model="priceInvertOption" />
        <h3 class="">Invertir posicion precio:</h3>
      </div>
    </div>
    <div class="styleEditItem">
      <h2>Boton</h2>
      <div class="divider" />
      <h3>Posicion del boton:</h3>
      <div class="flex gap-6">
        <div>
          <input type="radio" id="izquierda" value="left" name="posicion"
            :checked="cardStyleStore.buttonPosition === 'left'" @change="cardStyleStore.setButtonPosition('left')">
          <label for="izquierda">Izquierda</label>
        </div>
        <div>
          <input type="radio" id="centrado" value="center" name="posicion"
            :checked="cardStyleStore.buttonPosition === 'center'" @change="cardStyleStore.setButtonPosition('center')">
          <label for="centrado">Centrado</label>
        </div>
        <div>
          <input type="radio" id="derecha" value="right" name="posicion"
            :checked="cardStyleStore.buttonPosition === 'right'" @change="cardStyleStore.setButtonPosition('right')">
          <label for="derecha">Derecha</label>
        </div>
      </div>

      <h3>Color del boton:</h3>
      <ColorPicker :value="cardStyleStore.buttonBg" :valueUpdate="cardStyleStore.setButtonBg" />
      <h3>Color de texto:</h3>
      <ColorPicker :value="cardStyleStore.buttonTextColor" :valueUpdate="cardStyleStore.setButtonTextColor" />
      <h3>Tamaño del texto:</h3>
      <NumberInput :value="cardStyleStore.buttonFontSize" :valueUpdate="cardStyleStore.setButtonFontSize" />
      <h3>Padding</h3>
      <Slider :value="cardStyleStore.buttonPadding" :valueUpdate="cardStyleStore.setButtonPadding" :minValue="0"
        :maxValue="14" />
    </div>
  </DropDownComp>
</template>

<style scoped>
.custom-checkbox {
  @apply mr-2 w-4 h-4 accent-orange-500;
}
</style>
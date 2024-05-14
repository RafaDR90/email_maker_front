<script setup>
import ProductModel from "../model/ProductModel";
import { defineProps } from "vue";
import { cardStyle } from "../store/CardStyle";


const cardStyleStore = cardStyle();

const props = defineProps({
  product: ProductModel,
  cardDirection: String,
});

const roundPvp = (pvp) => {
  const roundedPvp = Math.round(pvp * 100) / 100;
  const formattedPrice = roundedPvp.toFixed(2);
  return formattedPrice;
};

</script>

<template>
  <div style="display: flex; gap: 0.5rem; height: 460px;" :style="[
    cardDirection === 'col' ? { 'flex-direction': 'column' } : { 'flex-direction': 'row' },
    cardStyleStore.cardBgActive ? { 'background-color': cardStyleStore.cardBg } : {},
    cardStyleStore.border ? { 'border': '1px solid '+cardStyleStore.borderColor } : {},
  ]">
    <div style="display: flex; justify-content: center; height: 200px; position: relative;">
      <div v-if="props.product.oferta" style="display: flex; align-items: center; position: absolute; width: 100%;">
        <p
          style="padding: 0.5rem; color: white; font-size: 1.25rem; background-color: red; font-weight: bold; width: min-content; margin-left: 1.25rem; margin-right: 1.25rem; margin-top: 0.25rem;">
          ¡OFERTA!</p>
      </div>
      <img :src="props.product.url_imagen_compress" alt="Imagen del producto" style="height: 100%;">
    </div>
    <div style="height: 300px; display: flex; flex-direction: column;">
      <div style="display: flex; justify-content: center; height: 60px; align-items: center;">
        <p :style="[
          'font-size: ' + cardStyleStore.fontSizeTitle + 'px',
          'color: ' + cardStyleStore.titleColor,
          cardStyleStore.titleBold ? { 'font-weight': 'bold' } : {},
        ]">{{ props.product.titulo_small }}</p>
      </div>

      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.75rem;">
        <div
          style="display: flex; flex-direction: column; gap: 0.75rem; justify-content: space-around; margin-top: 1rem;">
          <p v-if="props.product.oferta"
            style="margin-left: 1.5rem; margin-right: 1.5rem;" :style="[
              {fontSize: cardStyleStore.fontSizePrice+'px'},
              {color: cardStyleStore.priceColor},
              cardStyleStore.priceBold ? {fontWeight: 'bold'} : {}
            ]">{{ roundPvp(props.product.pvd) }}</p>
          <p :style="[
            props.product.oferta ? {color: cardStyleStore.colorOldPrice, textDecoration: 'line-through', fontSize:cardStyleStore.OldPriceSize+'px'} : {color: cardStyleStore.priceColor, fontSize: cardStyleStore.fontSizePrice+'px'},
            cardStyleStore.priceBold ? {fontWeight: 'bold'} : {}]"
            style=" margin-left: 1.5rem; margin-right: 1.5rem;">
            {{ roundPvp(props.product.pvd_estandar) }}</p>
        </div>
        <div>
          <div style="display: flex; justify-content: center;">
            <a :href="'https://www.megasur.es'+props.product.url_product"  target="_blank" :style="[
              {backgroundColor: cardStyleStore.buttonBg},
              {padding: cardStyleStore.buttonPadding+'px'},
          {paddingLeft: (cardStyleStore.buttonPadding+(cardStyleStore.buttonPadding/100*70))+'px'},
          {paddingRight: (cardStyleStore.buttonPadding+(cardStyleStore.buttonPadding/100*70))+'px'},
          {color: cardStyleStore.buttonTextColor},
          {fontSize: cardStyleStore.buttonFontSize+'px'},
          cardStyleStore.buttonBold ? {fontWeight: 'bold'} : {},
          cardStyleStore.buttonRounded ? {borderRadius: '5px'} : {},
            ]"
              style=" margin: 0.875rem; width: min-content; ">
              Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
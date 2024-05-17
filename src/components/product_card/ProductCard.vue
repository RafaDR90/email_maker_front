<script setup>
import ProductModel from "../../model/ProductModel";
import { defineProps, computed } from "vue";
import { cardStyle } from "../../store/CardStyle";

const cardStyleStore = cardStyle();

const props = defineProps({
  product: ProductModel,
  cardDirection: String,
  cardInverted: String,
  cardDescription: Boolean,
});

const roundPvp = (pvp) => {
  const roundedPvp = Math.round(pvp * 100) / 100;
  const formattedPrice = roundedPvp.toFixed(2);
  return formattedPrice;
};

const cardCssStyle = computed(() => {
  const style = {
    height: cardStyleStore.cardHeight + "px",
  };

  if (cardStyleStore.cardBgActive) {
    style["background-color"] = cardStyleStore.cardBg;
  }

  if (cardStyleStore.border) {
    style["border"] = "1px solid " + cardStyleStore.borderColor;
  }

  if (props.cardDirection == "col") {
    style["flex-direction"] = "column";
  } else {
    style["flex-direction"] = props.cardInverted || "row";
  }

  return style;
});

function removeAndReplaceHTMLTags(text) {
  const regex = /<(?:.|\n)*?>/gm;

  const withLineBreaks = text.replace(/<br\s*[\/]?>/gi, " ");
  const withoutTags = withLineBreaks.replace(regex, " ");
  const formattedText = withoutTags.replace(/\n{2,}/g, "\n");

  return formattedText;
}
</script>

<template>
  <!-- Product Card -->
  <div
    style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem"
    :style="cardCssStyle"
  >
    <!-- Texto de oferta e imagen del producto -->
    <div
      style="
        display: flex;
        justify-content: center;
        height: 200px;
        position: relative;
      "
    >
      <!-- Oferta del producto  -->
      <div
        v-if="props.product.oferta"
        style="
          display: flex;
          align-items: center;
          position: absolute;
          width: 100%;
        "
      >
        <p
          style="
            padding: 0.5rem;
            color: white;
            font-size: 1.25rem;
            background-color: red;
            font-weight: bold;
            width: min-content;
            margin-left: 1.25rem;
            margin-right: 1.25rem;
            margin-top: 0.25rem;
            margin-bottom: 0px;
          "
        >
          ¡OFERTA!
        </p>
      </div>
      <!-- Imagen del producto -->
      <img
        v-if="props.product.url_imagen_compress"
        :src="props.product.url_imagen_compress"
        alt="Imagen del producto"
        style="height: 100%"
      />
      <img
        v-else
        src="@/assets/img/imagen_producto_defecto.png"
        alt="Imagen del producto"
        style="height: 100%"
      />
    </div>

    <!-- Cuerpo de ProductCard -->
    <div
      style="height: 300px; width: 100%; display: flex; flex-direction: column"
    >
      <!-- Título_small del producto -->
      <div
        style="
          display: flex;
          justify-content: center;
          height: 60px;
          align-items: center;
        "
      >
        <p
          :style="[
            'font-size: ' + cardStyleStore.fontSizeTitle + 'px',
            'color: ' + cardStyleStore.titleColor,
            cardStyleStore.titleBold ? { 'font-weight': 'bold' } : {},
          ]"
          style="margin-right: 3px; margin-left: 3px"
        >
          {{ props.product.titulo_small }}
        </p>
      </div>

      <!-- Descripción del producto -->
      <div
        v-if="cardDescription && props.product.descripcion"
        style="
          height: 100px;
          width: 100%;
          text-align: justify;
          overflow: hidden;
          padding-left: 2.1rem;
          padding-right: 2.1rem;
        "
      >
        <p>{{ removeAndReplaceHTMLTags(props.product.descripcion) }}</p>
      </div>

      <!-- Sección de botones y precios -->
      <div
        style="
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        "
        :style="[
          cardStyleStore.buttonPosition === 'center'
            ? { flexDirection: 'column' }
            : {},
          cardStyleStore.buttonPosition === 'left'
            ? { flexDirection: 'row-reverse' }
            : {},
          cardStyleStore.buttonPosition === 'right'
            ? { flexDirection: 'row' }
            : {},
        ]"
      >
        <!-- Sección de precios -->
        <div
          style="
            display: flex;
            gap: 0.75rem;
            justify-content: space-around;
            margin-top: 1rem;
          "
          :style="[
            cardStyleStore.priceInvert
              ? { flexDirection: 'column-reverse' }
              : { flexDirection: 'column' },
          ]"
        >
          <p
            v-if="props.product.oferta"
            style="
              margin-left: 1.5rem;
              margin-right: 1.5rem;
              margin-top: 0px;
              margin-bottom: 0px;
            "
            :style="[
              { fontSize: cardStyleStore.fontSizePrice + 'px' },
              { color: cardStyleStore.priceColor },
              cardStyleStore.priceBold ? { fontWeight: 900 } : {},
            ]"
          >
            {{ roundPvp(props.product.pvd) }}
          </p>
          <p
            :style="[
              props.product.oferta
                ? {
                    color: cardStyleStore.colorOldPrice,
                    textDecoration: 'line-through',
                    fontSize: cardStyleStore.oldPriceSize + 'px',
                  }
                : {
                    color: cardStyleStore.priceColor,
                    fontSize: cardStyleStore.fontSizePrice + 'px',
                  },
              cardStyleStore.priceBold ? { fontWeight: 900 } : {},
            ]"
            style="
              margin-left: 1.5rem;
              margin-right: 1.5rem;
              margin-top: 0px;
              margin-bottom: 0px;
            "
          >
            {{ roundPvp(props.product.pvd_estandar) }}
          </p>
        </div>

        <!-- Sección de botones -->
        <div
          :style="[
            cardStyleStore.buttonPosition !== 'center'
              ? { display: 'flex', alignItems: 'center' }
              : {},
          ]"
        >
          <div
            style="display: flex; justify-content: center; height: min-content"
          >
            <a
              :href="'https://www.megasur.es' + props.product.url_product"
              target="_blank"
              :style="[
                { backgroundColor: cardStyleStore.buttonBg },
                { padding: cardStyleStore.buttonPadding + 'px' },
                {
                  paddingLeft:
                    cardStyleStore.buttonPadding +
                    (cardStyleStore.buttonPadding / 100) * 40 +
                    'px',
                },
                {
                  paddingRight:
                    cardStyleStore.buttonPadding +
                    (cardStyleStore.buttonPadding / 100) * 40 +
                    'px',
                },
                { color: cardStyleStore.buttonTextColor },
                { fontSize: cardStyleStore.buttonFontSize + 'px' },
                cardStyleStore.buttonBold ? { fontWeight: 'bold' } : {},
                cardStyleStore.buttonRounded ? { borderRadius: '5px' } : {},
              ]"
              style="
                margin: 0.875rem;
                margin-bottom: 0;
                width: min-content;
                text-decoration: none;
              "
            >
              Comprar</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
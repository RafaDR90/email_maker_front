<script setup>
import { documentActions } from '../../../store/DocumentActions';
import { watch, ref } from 'vue';
import { productItems } from '../../../store/ProductsItems';
import AutocompleteForm from './mini_components/AutocompleteForm.vue';
import ProductService from '../../../api/ProductService';
import { cardStyle } from '../../../store/CardStyle';
import ColorPicker from './mini_components/ColorPicker.vue';


const cardStyleStore = cardStyle();

const foundProductsRef = ref([]);
const search = ref('');

const searchProducts = (search) => {
    ProductService.fetch10ProductsWithRef(search).then((response) => {
        foundProductsRef.value = response;
    });
};


const documentActionsStore = documentActions();
const productsItemsStore = productItems();
const selectedProduct = ref(null);



watch(() => documentActionsStore.selectedCard, () => {
    selectedProduct.value = productsItemsStore.productsList[documentActionsStore.selectedCard]
})

const setProduct = (product) => {
    productsItemsStore.editProduct(documentActionsStore.selectedCard, product)
}


const cardBgOption = ref(cardStyleStore.cardBgActive);
watch(() => cardBgOption.value, () => {
    cardStyleStore.setCardBgActive(cardBgOption.value);
})

const cardBorderOption = ref(cardStyleStore.border);
watch(() => cardBorderOption.value, () => {
    cardStyleStore.setBorder(cardBorderOption.value);
})

</script>

<template>
    <div>
        <AutocompleteForm :foundProducts="foundProductsRef" @search="searchProducts" @exportResult="setProduct" />
    </div>
    <div class="mt-5">
        <label class="">Color de fondo:</label> <input class="ml-2 w-4 h-4" type="checkbox" v-model="cardBgOption">
        <ColorPicker v-if="cardBgOption" :value="cardStyleStore.cardBg" :valueUpdate="cardStyleStore.setCardBg" />
    </div>
    <div class="mt-5">
        <label class="">Borde:</label> <input class="ml-2 w-4 h-4" type="checkbox" v-model="cardBorderOption">
        <ColorPicker v-if="cardBorderOption" :value="cardStyleStore.borderColor" :valueUpdate="cardStyleStore.setBorderColor" />

    </div>

</template>
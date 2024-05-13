<script setup>
import { documentActions } from '../../../store/DocumentActions';
import { watch, ref } from 'vue';
import { productItems } from '../../../store/ProductsItems';
import AutocompleteForm from './mini_components/AutocompleteForm.vue';
import ProductService from '../../../api/ProductService';


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

</script>

<template>
    <AutocompleteForm :foundProducts="foundProductsRef" @search="searchProducts" @exportResult="setProduct"/>
</template>
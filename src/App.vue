<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Navbar from "./components/navbar/NavBar.vue";
import { useStore } from "vuex";
import ProductService from "./api/ProductService";
import { useProductVars } from "./store/ProductVars";
import ProductModel from "./model/ProductModel";

const store = useStore();
const router = useRouter();
const productStore = useProductVars();

/* ---------------------
  Obtención de productos
  ---------------------- */

const fetchProducts = async () => {
  try {
    const responseData = await ProductService.fetchTenProducts();
    // Mapea los datos recuperados a instancias de ProductModel
    const productsData = responseData.map(
      (productData) => new ProductModel(productData)
    );

    productsData.forEach((product) => productStore.addProduct(product));

    console.log(productsData);
  } catch (error) {
    console.error("Error al cargar los productos:", error);
    //error.value = "Error al cargar los productos";
  }
};

onMounted(() => {
  store.dispatch("checkToken");
  fetchProducts();
});
</script>

<template>
  <header class="w-full h-16 shadow-sm shadow-indigo-950">
    <Navbar />
  </header>
  <main class="w-full min-h-[calc(100vh-4rem)] bg-indigo-200 z-0">
    <router-view />
  </main>
</template>

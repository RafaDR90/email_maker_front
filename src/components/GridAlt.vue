<script setup>
import { gridVars } from '../store/GridVars';

const ArrayProvisionalProductos = [
    {
        titulo: 'Producto 1',
        descripcionCorta: 'Esta es una descripción corta del producto 1',
        precio: 100.00
    },
    {
        titulo: 'Producto 2',
        descripcionCorta: 'Esta es una descripción corta del producto 2',
        precio: 200.00
    },
    {
        titulo: 'Producto 3',
        descripcionCorta: 'Esta es una descripción corta del producto 3',
        precio: 300.00
    },
    {
        titulo: 'Producto 4',
        descripcionCorta: 'Esta es una descripción corta del producto 4',
        precio: 400.00
    },
    {
        titulo: 'Producto 5',
        descripcionCorta: 'Esta es una descripción corta del producto 5',
        precio: 500.00
    },
    {
        titulo: 'Producto 6',
        descripcionCorta: 'Esta es una descripción corta del producto 6',
        precio: 600.00
    },
    {
        titulo: 'Producto 7',
        descripcionCorta: 'Esta es una descripción corta del producto 7',
        precio: 700.00
    },
];


const gridConfiguration = gridVars();

console.log(gridConfiguration.selectedMode);



const updateStyle = () => {
    return {
        'grid-template-columns': `repeat(${gridConfiguration.selectedMode.columns}, 1fr)`
    };
}

</script>

<template>
    <div class="grid-container" :style="updateStyle()">
        <div v-for="(producto, key) in ArrayProvisionalProductos" class="w-full h-20 bg-red-100" :style="gridConfiguration.selectedMode.childDistribution !== 'normal' ?
            (key % 2 === 0 ?
                { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[0]}` } :
                { 'grid-column': `span ${gridConfiguration.selectedMode.childDistribution[1]}` }) :
            {}">
            <p>{{ producto.titulo }}</p>
            <p>{{ producto.descripcionCorta }}</p>
            <p>{{ producto.precio }}</p>
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    gap: 10px;
}
</style>
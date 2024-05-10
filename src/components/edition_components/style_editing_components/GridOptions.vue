<script setup>
import { gridVars } from '../../../store/GridVars';

const gridConfiguration = gridVars();

const changeMode = (mode) => {
    gridConfiguration.setSelectedMode(mode);
}

</script>

<template>
    <div class="styleEditItem">
        <h2>Opciones de la cuadrícula</h2>
        <div class="divider" />
        <div class="button-group my-4 flex gap-4 flex-wrap">
            <button v-for="(mode, key) in gridConfiguration.modes" class="flex flex-col"
            @click="changeMode(key)">
                <img :src="mode.imgUrl" alt="imagen de modo" class=" w-28 rounded">
            </button>
        </div>
    </div>
</template>
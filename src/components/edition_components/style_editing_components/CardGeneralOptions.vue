<script setup>
import ColorPicker from '../block_editing_components/mini_components/ColorPicker.vue';
import colorPicker from '../block_editing_components/mini_components/ColorPicker.vue';
import DropDownComp from '../block_editing_components/mini_components/DropDownComp.vue';
import NumberInput from '../block_editing_components/mini_components/NumberInput.vue';
import Checkbox from '../block_editing_components/mini_components/CheckBox.vue';
import { cardStyle } from '../../../store/CardStyle';
import { watch, ref } from 'vue';


const cardStyleStore = cardStyle();


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
    <div class="mt-5">
        <label class="">Color de fondo:</label> <input class="ml-2 w-4 h-4" type="checkbox" v-model="cardBgOption">
        <ColorPicker v-if="cardBgOption" :value="cardStyleStore.cardBg" :valueUpdate="cardStyleStore.setCardBg" />
    </div>
    <div class="mt-5">
        <marquee>
            <label class="">Borde:</label> <input class="ml-2 w-4 h-4" type="checkbox" v-model="cardBorderOption">
        </marquee>
        <ColorPicker v-if="cardBorderOption" :value="cardStyleStore.borderColor"
            :valueUpdate="cardStyleStore.setBorderColor" />
    </div>
    <div class=" mt-5">
        <DropDownComp :buttonText="'Titulo'">
            <div>
                <label class="">Tamaño del titulo:</label>
                <NumberInput :value="cardStyleStore.fontSizeTitle" :valueUpdate="cardStyleStore.setFontSizeTitle" />
            </div>
            <div>
                <label class="">Color del titulo:</label>
                <ColorPicker :value="cardStyleStore.titleColor" :valueUpdate="cardStyleStore.setTitleColor" />
            </div>
            <div>
                <Checkbox :value="cardStyleStore.titleBold" :valueUpdate="cardStyleStore.setTitleBold" />
            </div>
        </DropDownComp>
    </div>
    <div class="mt-5">
        <DropDownComp :buttonText="'Precio'">
            <div>
                <label class="">Tamaño del precio:</label>
                <NumberInput :value="cardStyleStore.fontSizePrice" :valueUpdate="cardStyleStore.setFontSizePrice" />
            </div>
        </DropDownComp>
    </div>
</template>
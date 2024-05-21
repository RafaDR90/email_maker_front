<script setup>
import { useRouter } from "vue-router";
import { useBannerVars } from "../../store/BannerVars";
import { cardStyle } from "../../store/CardStyle";
import { useEmailVars } from "../../store/EmailVars";
import { gridVars } from "../../store/GridVars";
import { underBannerTextVars } from "../../store/UnderBannerText";
import { BASE_URL } from "../../api/ApiConstants";

const bannerVarsStore = useBannerVars();
const cardStyleStore = cardStyle();
const emailVarsStore = useEmailVars();
const gridVarsStore = gridVars();
const underBannerTextVarsStore = underBannerTextVars();

const router = useRouter();

const props = defineProps([
    "items",
]);

const emit = defineEmits(["delete"]);

const formatName = (name) => {
    return name.split(';')[1].split('.')[0];
}

const useTemplate = (item) => {
    console.log(item);
    router.push('/nuevo');
    let data = JSON.parse(item.data);
    data.bannerVars.forEach((element) => {
        if (element.key != '_isOptionsAPI') {
            let functionName = `set${element.key.charAt(0).toUpperCase() + element.key.slice(1)}`;
            bannerVarsStore[functionName](element.value);
        }
    });

    data.cardStyle.forEach((element) => {
        if (element.key != '_isOptionsAPI') {
            let functionName = `set${element.key.charAt(0).toUpperCase() + element.key.slice(1)}`;
            cardStyleStore[functionName](element.value);
        }
    });

    data.emailVars.forEach((element) => {
        if (element.key != '_isOptionsAPI' && element.key != 'fonts' && element.key != 'generalFont' && element.key != 'emailSubjectFont') {
            let functionName = `set${element.key.charAt(0).toUpperCase() + element.key.slice(1)}`;
            if (typeof emailVarsStore[functionName] === 'function') {
                emailVarsStore[functionName](element.value);
            } else {
                console.error(`Function ${functionName} does not exist in emailVarsStore`);
            }
        }
    });

    gridVarsStore.setModeWhereImgUrl(data.gridVars[1].value.imgUrl);

    data.underBannerTextVars.forEach((element) => {
        if (element.key != '_isOptionsAPI' && element.key != "text" && element.key != "fonts" && element.key != "font") {
            let functionName = `set${element.key.charAt(0).toUpperCase() + element.key.slice(1)}`;
            underBannerTextVarsStore[functionName](element.value);
        }
    });

}

const deleteTemplate = async (item) => {
    const response = await fetch(BASE_URL + "/delete-template", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: item.id })
    });

    emit("delete", formatName(item.img_name));
}

</script>


<template>
    <div class=" w-full flex gap-10 flex-wrap ">
        <div v-if="items" v-for="item in items" @click="useTemplate(item)"
            class=" w-40 border-4  border-transparent hover:border-orange-400 p-2 cursor-pointer relative">
            <p>{{ formatName(item.img_name) }}</p>
            <img :src="'http://127.0.0.1:8000/storage/images/' + item.img_name" alt="Miniatura del estilo"
                class="w-full">
            <div class="absolute w-full bottom-2 right-0 text-center h-12   flex justify-center items-center">
                <p class="bg-red-500 w-11/12 h-full flex justify-center items-center rounded border-4 border-red-600 text-white font-bold hover:border-orange-400 hover:text-orange-300"
                    @mousehover.stop @click.stop="deleteTemplate(item)">Eliminar</p>
            </div>
        </div>
    </div>
</template>

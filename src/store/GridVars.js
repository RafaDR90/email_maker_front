import { defineStore } from 'pinia'

export const gridVars = defineStore({
    id: 'gridVars',
    state: () => {
        const modes = {
            mode0:{
                columns:1,
                childDistribution: 'normal',
                imgUrl: "/src/assets/img/1columna_light.png"
            },
            mode1:{
                columns:2,
                childDistribution: 'normal',
                imgUrl:"/src/assets/img/2columnas_light.png"
            },
            mode2:{
                columns:3,
                childDistribution: 'normal',
                imgUrl: "/src/assets/img/3columnas_light.png"
            },
           /* mode3:{
                columns:3,
                childDistribution: [1,2],
                imgUrl: "/src/assets/img/columns_dist/1_2_columnas_light.png"
            },
            mode4:{
                columns:3,
                childDistribution: [2,1],
                imgUrl: "/src/assets/img/columns_dist/2_1_columnas_light.png"
            },*/
        };

        return {
            modes,
            selectedMode: modes.mode1,
        }
    },
    actions: {
        setSelectedMode(mode){
            if (this.modes[mode]) {
                this.selectedMode = this.modes[mode];
            }
        },
        setModeWhereImgUrl(imgUrl){
            for (const mode in this.modes) {
                if (this.modes[mode].imgUrl === imgUrl) {
                    this.selectedMode = this.modes[mode];
                    return;
                }
            }
        }
    }
})
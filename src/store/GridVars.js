import { defineStore } from 'pinia'

export const gridVars = defineStore({
    id: 'gridVars',
    state: () => {
        const modes = {
            mode0:{
                columns:1,
                childDistribution: 'normal',
                imgUrl: "/src/assets/img/columns_dist/1columna_light.png"
            },
            mode1:{
                columns:2,
                childDistribution: 'normal',
                imgUrl:"/src/assets/img/columns_dist/2columnas_light.png"
            },
            mode2:{
                columns:3,
                childDistribution: 'normal',
                imgUrl: "/src/assets/img/columns_dist/3columnas_light.png"
            },
            mode3:{
                columns:3,
                childDistribution: [1,2],
                imgUrl: "/src/assets/img/columns_dist/1_2_columnas_light.png"
            },
            mode4:{
                columns:3,
                childDistribution: [2,1],
                imgUrl: "/src/assets/img/columns_dist/2_1_columnas_light.png"
            },
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
        }
    }
})
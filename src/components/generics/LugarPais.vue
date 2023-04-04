<template>
    <list-box label="Pais" :items="paisItems" :selected="paisSelected" :on-change="getDptos" />
    <list-box label="Departamento" :items="dptoItems" :selected="dptoSelected" :on-change="getMuni" />
    <list-box label="Municipio" :items="muniItems" :selected="muniSelected" :on-change="setMuni" />
</template>

<script>

import * as srv from '@/service/GetData'
import ListBox from '../formsUtils/ListBox.vue'
export default {
    props:{
        name:{type:String, default:"lugar"},
        setLugar:{type: Function, default() {return "Default function"; }}
    },
    components: {ListBox },
    data: () => ({
        paisSelected: {  },
        paisItems: [ ],
        dptoSelected: {  },
        dptoItems: [ ],
        muniSelected: { },
        muniItems: [  ],
    }),
    methods: {
        async getPais(data) {
            //obtiene lsta de paises, pais por defecto
            const results = await srv.getPais()
            
            this.paisSelected = results.selected
            this.paisItems = results.items

             this.getDptos(this.paisSelected)
        },
       async  getDptos(dato) {
        
            //obtiene lista de municipios con select de Dpto y mun por defecto
            const results = await srv.getDpto([dato])            
            this.dptoSelected = results.selected
            this.dptoItems = results.items
            
           this.getMuni(this.dptoSelected)
        },
       async getMuni(dato) {
            //setea municipio defecto
            const results = await srv.getMuni([this.paisSelected , dato])
            this.muniSelected = results.selected
            this.muniItems = results.items
             this.setMuni(this.muniSelected)
        },

        setMuni(dato){
            //dato: municipio seleccionado
            this.setLugar({[`${this.name}`]: {pais:this.paisSelected.value, dpto:this.dptoSelected.value, muni:dato.value}})
        }

    },

    mounted() {
      this.getPais()  
    },
}
</script>

<style></style>
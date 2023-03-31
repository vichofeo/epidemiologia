<template>
    <v-switch
              v-model="sw_hosp"
              label="Hospitalizado"
              color="error"
              value="error"
              inset
              hide-details
            ></v-switch>
    <div v-if="sw_hosp">
        <radio-btn-forms :items="estado_hosp"/>
        <list-box-forms :label="`Elija el Gestor de salud`" :items="ente_gestor" :selected="hospitalizacion.gestorSelected"/>
        <list-box-forms :label="`Elija el Establecimiento de salud`" :items="establecimientos" :selected="hospitalizacion.establecimientoSelected"/>
        <calendar-forms :label="`Fecha`"/>
    </div>
  
</template>

<script>
import CalendarForms from '../inputs/CalendarForms.vue'
import ListBoxForms from '../inputs/ListBoxForms.vue'
import RadioBtnForms from '../inputs/RadioBtnForms.vue'

export default {
    components:{CalendarForms, RadioBtnForms, ListBoxForms},
data:()=>({
    sw_hosp: false,
    hospitalizacion: {
        gestorSelected: {value:'-1', title:'Ninguno'},
        establecimientoSelected: {value:'-1', title:'Ninguno'},        
        fecha: null,

    },
    loading: false,
    estado_hosp:{label: "Etapa Hospitalizacion", options:[{value:0, label:"Para hospitalizacion"}, {value:1, label:"En hospitalizacion"}, {value:2, label:"Para Alta Medica"}]},
    ente_gestor: [{ value: 0, title: "Grupo Formulario 000" },
            { value: 1, title: "Grupo Formulario 001" },
            { value: 2, title: "Grupo Formulario 002" },
            { value: 3, title: "Grupo Formulario 003" },],
    establecimientos: [{ value: 0, title: "salus" },
            { value: 1, title: "Grupo Formulario 001" },
            { value: 2, title: "Grupo Formulario 002" },
            { value: 3, title: "Grupo Formulario 003" },]

}),
methods:{
    getGestores(){
//obtoene listado de gestores y selec default

    },
    getEstablecimientos(selected){
        //ontiene lista de establecimientos y opcion por default
        //default de establecimiento
    },
    setEstablecimiento(selected){
        this.hospitalizacion.establecimientoSelected = selected
    }
}
}
</script>

<style>

</style>
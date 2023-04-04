<template>
    <v-switch v-model="sw_hosp" label="Hospitalizado" color="error" value="error" inset hide-details></v-switch>
    <div v-if="sw_hosp">
        <radio-btn-forms :items="estado_hosp" />

        <list-box label="Elija el Gestor de salud" :items="gestorItems" :selected="gestorSelected"
            :on-change="getEstablecimientos" />
        <list-box :label="`Elija el Establecimiento de salud`" :items="establecimientosItems"
            :selected="establecimientoSelected" />
        <calendar-forms :label="`Fecha`" />
    </div>
</template>

<script>
import CalendarForms from '../inputs/CalendarForms.vue'
import ListBox from '../formsUtils/ListBox.vue'
import RadioBtnForms from '../inputs/RadioBtnForms.vue'

import * as srv from "@/service/GetData"

export default {
    components: { CalendarForms, RadioBtnForms, ListBox },
    data: () => ({
        sw_hosp: false,
        gestorSelected: {},
        establecimientoSelected: {},
        hospitalizacion: {

            fecha: null,

        },

        estado_hosp: { label: "Etapa Hospitalizacion", options: [{ value: 0, label: "Para hospitalizacion" }, { value: 1, label: "En hospitalizacion" }, { value: 2, label: "Para Alta Medica" }] },
        gestorItems: [],
        establecimientosItems: []

    }),
    methods: {
        async getGestores() {
            //obtoene listado de gestores y selec default
            const results = await srv.getGestores({ value: -1 })
            this.gestorSelected = results.selected

            this.gestorItems = results.items

            this.getEstablecimientos(this.gestorSelected)


        },
        async getEstablecimientos(datos) {
            //ontiene lista de establecimientos y opcion por default

            const results = await srv.getEstablecimientos(datos)
            //default de establecimiento
            this.establecimientoSelected = results.selected
            this.establecimientosItems = results.items

        },
        setEstablecimiento(selected) {
            this.hospitalizacion.establecimientoSelected = selected
        }
    },
    mounted() {
        this.getGestores()
    },
}
</script>

<style></style>
<template>
    <list-box-forms label="Pais" :items="paisItems" :selected="paisSelected" :on-change="getPais" />
    <list-box-forms label="Departamento" :items="dptoItems" :selected="dptoSelected" :on-change="getDptos" />
    <list-box-forms label="Municipio" :items="muniItems" :selected="muniSelected" :on-change="setMuni" />
</template>

<script>
import ListBoxForms from '../inputs/ListBoxForms.vue'
export default {
    components: { ListBoxForms },
    data: () => ({
        paisSelected: { value: 0, title: "Grupo Formulario 000" },
        paisItems: [
            { value: 0, title: "Grupo Formulario 000" },
            { value: 1, title: "Grupo Formulario 001" },
            { value: 2, title: "Grupo Formulario 002" },
            { value: 3, title: "Grupo Formulario 003" },
        ],
        dptoSelected: { value: 0, title: "Grupo Formulario 000" },
        dptoItems: [
            { value: 0, title: "Grupo Formulario 000" },
            { value: 1, title: "Grupo Formulario 001" },
            { value: 2, title: "Grupo Formulario 002" },
            { value: 3, title: "Grupo Formulario 003" },
        ],
        muniSelected: { value: 0, title: "Grupo Formulario 000" },
        muniItems: [
            { value: 0, title: "Grupo Formulario 000" },
            { value: 1, title: "Grupo Formulario 001" },
            { value: 2, title: "Grupo Formulario 002" },
            { value: 3, title: "Grupo Formulario 003" },
        ],
    }),
    methods: {
        getPais(pais) {
            //obtiene lsta de paises, pais por defecto
            //obtiene lista de departamentos con select por defecto
        },
        getDptos(dpto) {
            //obtiene lista de municipios con select de Dpto y mun por defecto
        },
        setMuni(muni) {
            //setea municipio defecto
        }


    }
}
</script>

<style></style>
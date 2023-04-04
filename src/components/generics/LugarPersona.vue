<template>
  <v-row no-gutters dense>

    <v-col cols="10" xs="12" sm="10" md="10" lg="10" xl="10">
      {{ label }}
      <lugar-pais :set-lugar="setLugar" />

    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="lugarPersona.ciudad" clearable label="Zona" placeholder="Barrio" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="lugarPersona.barrio" clearable label="Barrio" placeholder="Barrio" />
    </v-col>

    <calendar-forms :label="`Fecha Posible Contagio`" :setFunction="setfechaInfectado" />

  </v-row>
  {{ antEpi }}
</template>
  
<script>
import CalendarForms from '../inputs/CalendarForms.vue'


import LugarPais from './LugarPais.vue'

export default {
  props:{
    label:{type:String, default:"Lugar probable de Infeccion"}
  },
  components: { LugarPais, CalendarForms },
  data: () => ({
    lugarPersona: {
      lugar: null,
      ciudad: null,
      zona: null,
      fecha_infectado: null

    },
    loading: false,
  }),

  methods: {
    setLugar(dato) {
      this.lugarPersona = { ...this.lugarPersona, ...dato }
    },
    setfechaInfectado(dato) {
      this.lugarPersona = { ...this.lugarPersona, fecha: dato }
    }
  },
}
</script>
  
<style></style>
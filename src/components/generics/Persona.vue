<template>
  <v-row no-gutters dense>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.dni_persona"   class="mb-2" clearable
        label="Doc. Identidad - Compl" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.primer_apellido"   clearable
        label="Primer Apellido" placeholder="Primer Apellido"/>
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.segundo_apellido"  clearable label="Segundo Apellido"
        placeholder="Segundo Apellido" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.casada_apellido"  clearable label="Apellido de casada"
        placeholder="Apellido de casada" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.nombres"   clearable label="Nombres"
        placeholder="Nombres" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.telefono"  clearable label="Telefono" placeholder="Telefono" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <radio-btn-forms
        :items="{ label: 'Sexo', options: [{ label: 'Masculino', value: 'M' }, { label: 'Femenino', value: 'F' }] }" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      
    <lugar-pais :set-lugar="setLugar"/>

    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.direccion"  clearable label="Direccion Residencia" placeholder="Direccion" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.zona"  clearable label="Zona Residencia" placeholder="Barrio" />
    </v-col>
    <v-col cols="3" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-text-field v-model="persona.barrio"  clearable label="Barrio " placeholder="Barrio" />
    </v-col>



  </v-row>
</template>

<script>

import RadioBtnForms from '../inputs/RadioBtnForms.vue'
import LugarPais from './LugarPais.vue'
import LugarPersona from './LugarPersona.vue'

export default {
  components: { RadioBtnForms, LugarPais, LugarPersona },
  data: () => ({
    persona: {
      dni_persona: null,
      primer_apellido: null,
      segundo_apellido: null,
      casada_apellido: null,
      nombres: null,
      telefono: null,
      fecha_nacimiento: null,
      sexo: null,
      cod_pais: null,
      cod_dpto: null,
      cod_municipio: null,
      direccion: null,
      zona: null,
      barrio: null,
      lugar: null

    },
    loading: false,
  }),

  methods: {
    setLugar(dato){
      this.persona = {...this.persona, ...dato}
    }
  },
}
</script>

<style></style>
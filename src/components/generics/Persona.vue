<template>
  
  <v-row no-gutters dense>  
<v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
      <v-text-field v-model="persona.dni_persona" :readonly="loading" :rules="[required]" class="mb-2" clearable
        label="Doc. Identidad - Compl"></v-text-field>
</v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">

      <v-text-field v-model="persona.primer_apellido" :readonly="loading" :rules="[required]" clearable
        label="Primer Apellido" placeholder="Primer Apellido"></v-text-field>
</v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
      <v-text-field v-model="persona.segundo_apellido" :readonly="loading" clearable label="Segundo Apellido"
        placeholder="Segundo Apellido" />
        </v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
      <v-text-field v-model="persona.casada_apellido" :readonly="loading" clearable label="Apellido de casada"
        placeholder="Apellido de casada" />
        </v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
      <v-text-field v-model="persona.nombres" :readonly="loading" :rules="[required]" clearable label="Nombres"
        placeholder="Nombres" />
        </v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
      <v-text-field v-model="persona.telefono" :readonly="loading" clearable label="Telefono" placeholder="Telefono" />
      </v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
      <radio-btn-forms
        :items="{ label: 'Sexo', options: [{ label: 'Masculino', value: 'M' }, { label: 'Femenino', value: 'F' }] }" />
        </v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
<lugar-pais/>
</v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
<v-text-field v-model="persona.direccion" :readonly="loading" clearable label="Direccion" placeholder="Direccion" />
</v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
<v-text-field v-model="persona.zona" :readonly="loading" clearable label="Zona" placeholder="Barrio" />
</v-col><v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
<v-text-field v-model="persona.zona" :readonly="loading" clearable label="Barrio" placeholder="Barrio" />
</v-col>
      

    
  </v-row>
</template>

<script>
import ListBoxForms from '../inputs/ListBoxForms.vue'
import RadioBtnForms from '../inputs/RadioBtnForms.vue'
import LugarPais from './LugarPais.vue'

export default {
  components: { RadioBtnForms, ListBoxForms, LugarPais },
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
      barrio: null
    },
    loading: false,
  }),

  methods: {
    onSubmit() {

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>

<style></style>
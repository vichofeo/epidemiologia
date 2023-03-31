<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8">

      <v-text-field v-model="persona.dni_persona" :readonly="loading" :rules="[required]" class="mb-2" clearable
        label="Doc. Identidad - Compl"></v-text-field>

      <v-text-field v-model="persona.primer_apellido" :readonly="loading" :rules="[required]" clearable
        label="Primer Apellido" placeholder="Primer Apellido"></v-text-field>

      <v-text-field v-model="persona.segundo_apellido" :readonly="loading" clearable label="Segundo Apellido"
        placeholder="Segundo Apellido" />
      <v-text-field v-model="persona.casada_apellido" :readonly="loading" clearable label="Apellido de casada"
        placeholder="Apellido de casada" />
      <v-text-field v-model="persona.nombres" :readonly="loading" :rules="[required]" clearable label="Nombres"
        placeholder="Nombres" />
      <v-text-field v-model="persona.telefono" :readonly="loading" clearable label="Telefono" placeholder="Telefono" />
      <radio-btn-forms
        :items="{ label: 'Sexo', options: [{ label: 'Masculino', value: 'M' }, { label: 'Femenino', value: 'F' }] }" />
<lugar-pais/>
<v-text-field v-model="persona.direccion" :readonly="loading" clearable label="Direccion" placeholder="Direccion" />
<v-text-field v-model="persona.zona" :readonly="loading" clearable label="Zona" placeholder="Barrio" />
<v-text-field v-model="persona.zona" :readonly="loading" clearable label="Barrio" placeholder="Barrio" />
      <br>

      <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit" variant="elevated">
        Sign In
      </v-btn>

    </v-card>
  </v-sheet>
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
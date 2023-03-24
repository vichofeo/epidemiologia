<template>
  <v-card class="mx-auto">
    <v-layout>
      <v-app-bar density="compact" :elevation="1">
        <v-tabs
          v-model="tab"
          density="compact"          
          bg-color="transparent"
          color="basil"
          
        >
          <v-tab value="t1"  color="primary" bg-color="error"
            >Insertar</v-tab
          >
          <v-tab value="t2">Ver</v-tab>
          <v-tab value="t3">Imprimir</v-tab>
        </v-tabs>
        <v-app-bar-title>En desarrollo mental</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col cols="12" xs="12" sm="12" xl="12" md="12" lg="12">
            <v-window v-model="tab">
              <v-window-item value="t1"> <ask/> </v-window-item>

              <v-window-item value="t2"> Two </v-window-item>

              <v-window-item value="t3"> Three gfdg dfgdfgdf g dgdfgdfg</v-window-item>
            </v-window>
          </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Ask from '@/components/formsUtils/Ask.vue';
/**
 * 0  -> 1 radio
 * 1  -> 2 check
 * 2  -> 4 texto
 * 3  -> 8 grid Respuestas
 *
 */

export default {
  components: {Ask},
  data: () => ({
    tab: null,
  }),

  computed: {},

  methods: {},
};
</script>

<style></style>

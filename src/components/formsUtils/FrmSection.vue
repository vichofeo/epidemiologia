<template>
  <v-card class="mx-auto text-body-1" max-width="99%" density="compact" elevation="1">
    <h3>Agregar nueva Seccion al formulario (BotonPopup)</h3>

    <v-divider />
    <v-card-text>
      <v-expansion-panels class="mb-4" variant="inset">
        <v-expansion-panel v-for="i in 3" :key="i">
          <v-expansion-panel-title
            expand-icon="mdi-plus"
            collapse-icon="mdi-minus"
            color="blue-darken-1"
          >
            <v-row no-gutters>
              <v-col cols="5" class="d-flex justify-start"> seccion {{ i }} </v-col>
              <v-col cols="6" class="d-flex justify-end">
                <v-btn density="compact" size="small" class="text-subtitle-2"
                  >ki cloc</v-btn
                >
              </v-col>
              <v-col cols="1">..</v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <frm-ask />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import FrmAsk from "./FrmAsk.vue";
export default {
  components: { FrmAsk },
  props: {
    sections: { type: Array, default: [] },
  },
  mounted() {},
};
</script>

<style></style>

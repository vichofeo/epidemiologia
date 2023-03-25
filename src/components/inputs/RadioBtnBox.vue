<template>
  <v-card class="mx-auto text-body-1" density="compact">
    <v-card-text>
      <v-radio-group inline  v-model="dataModel">
        <v-radio
          :label="obj.answer"
          color="orange-darken-3"
          :value="obj.answer"
          v-for="(obj, i) in answers"
        ></v-radio>
        
      </v-radio-group>
      {{ dataModel }}
    </v-card-text>
  </v-card>
</template>

<script>
/**
 * 0  -> 1 radio
 * 1  -> 2 check
 * 2  -> 4 texto
 * 3  -> 8 grid Respuestas
 *
 */
export default {
  props: {
    answers : {type: Array, default:[]}
  },
  data: () => ({
    dataModel: "",
  }),
};
</script>

<style></style>

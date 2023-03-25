<template>
  <v-container class="bg-grey-lighten-2">
    <v-row no-gutters v-for="(obj, i) in answers">
      <v-col >
        <v-sheet class="pa-2 ma-2"> {{obj.question}} </v-sheet>
      </v-col>
      <v-col v-for="(o, j) in obj.answers">
        <v-sheet class="pa-2 ma-2"> 
          <v-text-field
      v-model.number="dataModel[i][j]"
      :rules="[(v) => !!v || 'El valor del campo es requerido']"
      clearable
      :label="o.answer"
      type="number"
      ref="input"
      hint="Digite su Respuesta Solo Numeros"
      variant="outlined"
      density="compact"
      class="text-subtitle-2"      
    ></v-text-field>
    
           </v-sheet>
      </v-col>
      
    </v-row>
  </v-container>
  {{ dataModel }}
</template>

<script>
import { reactive } from 'vue';
/**
 * 0  -> 1 radio
 * 1  -> 2 check
 * 2  -> 4 texto
 * 3  -> 8 grid Respuestas
 *
 */

export default {
  props: {
    answers: { type: Array, default: [] },
    
  },
  setup(props){
    const data = props.answers.map((obj, i)=>{
      return obj.answers.map((o,  j)=>{
        return 0
      })
    })

const dataModel = reactive({
  ...data
})
    return {dataModel}
  },
 
};
</script>

<style></style>

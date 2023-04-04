<template>

<v-row dense no-gutters v-for="i in repeat" :key="uuid">
    <v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
  <list-box-forms :label="`Tipo de Muestra`" :selected="muestraSelected" :items="muestraItems" :onChange="onChange"/>
    </v-col>
    <v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
  <calendar-forms :label="`Fecha Muesta`"/>
    </v-col>
    <v-col cols="3" xs="12" sm="6"  md="4" lg="3" xl="3">
    <calendar-forms :label="`Fecha envio`"/>
    </v-col>
</v-row>
<v-spacer></v-spacer>
      <div >
        <v-btn
          variant="flat"
          color="error"
          icon="mdi-numeric-negative-1"
          size="small"
          @click="minus"
        ></v-btn>
        <v-btn
          variant="flat"
          color="success"
          icon="mdi-numeric-positive-1"
          size="small"
          @click="more"
        ></v-btn>
      </div>
</template>

<script>
import CalendarForms from '../inputs/CalendarForms.vue';
import ListBoxForms from '../inputs/ListBoxForms.vue'
import { v4 } from 'uuid';

export default {
  components: { ListBoxForms,  CalendarForms },
data:()=>({
    repeat: 1,
    muestraSelected: {value:0, title:"Orina"},
    muestraItems:[{value:0, title:"Orina"},
    {value:1, title:"Sangre"},
    {value:2, title:"Flema"}]
}),
methods:{
  uuid(){
return v4()
  },
    onChange (datos){

    },
    more() {
      if (this.repeat < 10) {
        this.repeat++;
      }
    },
    minus() {
      if (this.repeat > 1) {
        this.message.pop();
        this.repeat--;
      }
    },
}
}
</script>

<style>

</style>
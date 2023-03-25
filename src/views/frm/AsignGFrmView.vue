<template>
  <v-card
    class="mx-auto"
    variant="outlined"
    :style="'border: 1px solid #1D62A1;'"
    density="compact"
    elevation="0"
  >
    <v-sheet outlined color="blue">
      <v-row dense no-gutters>
        <v-col cols="6" xs="5" sm="5" xl="6" md="6" lg="6">
          Seleccione un grupo y un formulario o cree su formulario en el grupo
        </v-col>
        <v-col cols="6" xs="5" sm="5" xl="6" md="6" lg="6">
          <v-row dense >
            <v-col cols="8">
              <list-box
                :label="`Seleccione un Grupo - Formulario`"
                :items="secItems"
                :selected="secSelected"
                :onChange="onChangeSec"
              />
            </v-col>
            <v-col cols="4" >
              <v-btn color="success" variant="flat" size="small">Nuevo Grupo</v-btn>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="8">
            <list-box
              :label="`Seleccione Formulario`"
              :items="frmItems"
              :selected="frmSelected"
              :onChange="onChangeFrm"
            />
          </v-col><v-col cols="4" >            
            <v-btn color="success" variant="flat" size="small">Nuevo Formulario</v-btn>
          </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>

    <v-card-text>
      {{ frmSelected.title }}
      <table-data-up-del :items="items" :titles="['Name','calorias']" :fmodify="modifySecFrm" :fdelete="deleteSecFrm"/>
      {{ secSelected }}
      {{ frmSelected }}
    </v-card-text>

  </v-card>
  <!-- secciones -->
  <v-card-text>
    <frm-section :sections="datosFrm.sections"/>
  </v-card-text>
  
</template>

<script>
import ListBox from "@/components/formsUtils/ListBox.vue";
import TableDataUpDel from '@/components/formsUtils/TableDataUpDel.vue';
import FrmSection from '@/components/formsUtils/FrmSection.vue';

import {getDataFrm} from '@/service/data/datos'


export default {
  components: { ListBox,  TableDataUpDel, FrmSection },
  data: () => ({
    secSelected: { value: 0, title: "seccion 000" },
    secItems: [
      { value: 0, title: "seccion 000" },
      { value: 1, title: "seccion 001" },
      { value: 2, title: "seccion 002" },
      { value: 3, title: "seccion 003" },
    ],
    frmSelected: { value: 0, title: "formu 000" },
    frmItems: [
      { value: 0, title: "formu 000" },
      { value: 1, title: "formu 001" },
      { value: 2, title: "formu 002" },
      { value: 3, title: "formu 003" },
    ],
    items: [
      {id:100, name: "Frozen Yogurt",calories: 159},
      {id:101, name: "Ice cream sandwich", calories: 237},
      {id:102, name: "Eclair", calories: 262},
      {id:103, name: "Cupcake", calories: 305}
      
    ],
    //datosFrm: null,
    datosFrm: [],
    
  }),
  methods: {
    onChangeSec(data) {
      this.secSelected = data;
    },
    onChangeFrm(data) {
      this.frmSelected = data;
    },
    modifySecFrm(idx){
      alert("idx para moduifcoa:"+idx)
    },
    deleteSecFrm(idx){
      alert("idx para eliminar:"+idx)
    },
    initData(){      
      this.datosFrm = getDataFrm()
      console.log(this.datosFrm)
    }
  },
  
 
	mounted() {
    this.initData()
    /*this.datosService.getDatos.then((datosFrm) => {
			this.datosFrm = datosFrm;
		});
    */

    
  },
};
</script>

<style></style>

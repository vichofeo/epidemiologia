<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th
          class="text-left"
          v-for="value in [
            'formulario',
            'subformulario',
            'enunciado',
            'opcion',
            'conteo',
            'frms',
          ]"
          :key="uuid()"
        >
          {{ value }}
        </th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in items" :key="uuid()">
        <td >{{ item.nombre_formulario }}</td>
        <td >{{ item.nombre_subfrm }}</td>
        <td >{{ item.enunciado }}</td>
        <td >{{ item.respuesta }}</td>
        <td >{{ item.respuestas }}</td>
        <td >{{ item.frms }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import * as srv from "@/service/GetData";
import TableDataUpDel from "@/components/formsUtils/TableDataUpDel.vue";
import { v4 as uuid } from "uuid";
export default {
  components: { TableDataUpDel },
  data: () => ({
    items: null,
    datos: [],
  }),
  methods: {
    async getData() {
      const carga = { id: this.$store.state.usr.institucion.id };
      this.items = await srv.getReportUsr(carga);
      
    },
    changeObjToArray(items) {
      if (items) {
        this.datos = items.map((obj, i) => {
          let aux = Object.values(obj);
          this.idCol[i] = aux.shift();
          return aux;
        });
      } else this.datos = [];
    },
    uuid() {
      return uuid();
    },
  },
  created() {
    this.getData();
  },
  items: {
    deep: true,
    handler: function (newValue, oldValue) {
      this.items = newValue;
      
    },
  },
};
</script>

<style></style>

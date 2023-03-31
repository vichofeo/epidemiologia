<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <!--
        <list-box :label="cLabel[i]" 
        :items="obj" 
        :selected="cSelected[i]"
          :onChange="getInfoCombos" 
          v-for="(obj, i) in comboxes"
          /> -->
        <v-combobox
          v-model="cSelected[ii]"
          :items="obj"
          :label="cLabel[ii]"
          
          class="ml-auto"
          density="compact"
          v-for="(obj, ii) in comboxes"
          @update:model-value="getInfoCombos()"
          :key="'comboxes_' + ii"
        >
          <template v-slot:selection="data">
            <v-chip
              variant="text"
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :model-value="data.selected"
              :disabled="data.disabled"
              size="small"
              @click:close="data.parent.selectItem(data.item)"
            >
              <template v-slot:prepend>
                <v-avatar color="primary" class="bg-accent text-uppercase" start>{{
                  data.item.title.slice(0, 1)
                }}</v-avatar>
              </template>
              {{ data.item.title }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
      <v-col>
        <h4>Entidades de salud</h4>
        <v-list lines="one" density="compact">
  <v-list-item
    v-for="item in hospitales"
    :key="item.establecimiento"
    :title="item.establecimiento"
    
  ></v-list-item>
</v-list>
      </v-col>
      <v-col>
      
        <list-box
          :label="`Seleccione un Grupo - Formulario`"
          :items="secItems"
          :selected="secSelected"
          :onChange="onChangeSec"
        />
        <list-box
          :label="`Seleccione Formulario`"
          :items="frmItems"
          :selected="frmSelected"
          :onChange="onChangeFrm"
        />
      
      <v-btn color="success">Guardar asignacion</v-btn>
      </v-col>
    
      
    </v-row>
  </v-container>

  <!-- ************ loader ************* -->
  <v-dialog
    v-model="swLoader"
    hide-overlay
    persistent
    width="300"
    style="z-index: 29990000"
  >
    <v-card color="primary" dark>
      <v-card-text>
        Buscando datos
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import * as srv from "@/service/multiPolygon.service";
import ListBox from "@/components/formsUtils/ListBox.vue";
export default {
  components: { ListBox },
  data: () => ({
    secSelected: { value: 0, title: "Grupo Formulario 000" },
    secItems: [
      { value: 0, title: "Grupo Formulario 000" },
      { value: 1, title: "Grupo Formulario 001" },
      { value: 2, title: "Grupo Formulario 002" },
      { value: 3, title: "Grupo Formulario 003" },
    ],
    frmSelected: { value: 0, title: "formu 000" },
    frmItems: [
      { value: 0, title: "formu 000" },
      { value: 1, title: "formu 001" },
      { value: 2, title: "formu 002" },
      { value: 3, title: "formu 003" },
    ],
    cSelected: [
      //{ value: "B - Seguridad Social (CAJAS)", title: "B - Seguridad Social (CAJAS)" },
      { value: "Seguridad Social (CAJAS)", title: "Seguridad Social (CAJAS)" },
      { value: "-1", title: "-Todos-" },
      { value: "-1", title: "-Todos-" },
      { value: "-1", title: "-Todos-" },
      { value: "-1", title: "-Todos-" },
      { value: "-1", title: "-Todos-" },
      { value: "-1", title: "-Todos-" },
      { value: "-1", title: "-Todos-" },
    ],
    comboxes: [],
    swLoader: false,
    cLabel: [],
    hospitales: [],

    indexCSelected: -1,
  }),
  methods: {
    onChangeSec(data) {
      this.secSelected = data;
    },
    onChangeFrm(data) {
      this.frmSelected = data;
    },
    async getInfoCombos() {
      
      this.swLoader = true;
      const res = await srv.getCombox(this.cSelected);

      
      this.cSelected = res.body.listSelect.map((obj) => ({
        value: obj.value,
        title: obj.text,
      }));

      
      const aux = res.body.listBox;
      this.comboxes = aux.map((obj) => {
        return obj.map((o) => {
          return {
            value: o.value,
            title: o.text,
          };
        });
      });

      this.cLabel = res.body.listLabel;

      this.hospitales = res.body.hospitales;
      this.indexCSelected = res.body.indexDpto;
      this.swLoader = false;
      console.log(this.hospitales)
    },
  },
  created() {
    this.getInfoCombos();
  },
};
</script>

<style></style>

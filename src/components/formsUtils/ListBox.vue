<template>
  <v-combobox
    variant="solo"
    v-model="select"
    :items="items"
    :label="label"    
    density="compact"
    @update:modelValue="onchangeHere"
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
</template>

<script>
export default {
  props: {
    items: { type: Array, default: [] },
    selected: { type: Object, default: () => { }, },
    label: { type: String, default: "Unknow" },
    onChange: { type: Function, default() {
        return 'Default function'
      } },
  },
  data: ()=>({
    select:{}
  }),
  mounted() {
    this.select= this.selected
  },
  methods:{
    onchangeHere(){        
       this.onChange(this.select)
    }
  }, 
  watch:{
    /*select: {
      deep: true,
      handler: function () {
        this.onchangeHere();
      },
    },
    */
  }

};
</script>

<style></style>

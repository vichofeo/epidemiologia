<template>    
{{ label }}
  <VueDatePicker v-model="dateDefault" auto-apply model-type="yyyy/MM/dd" 
  :start-date="startDatePicker" 
  aria-placeholder="Seleccione una Fecha"
  :enable-time-picker="false" 
  position="left"
  ></VueDatePicker> la fechas
  {{ dateDefault }}
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {  ref } from "vue";

export default {
    props:{
        label: {type:String, default:''},
        yyyymmdd:{type: String, default: null},
        startDatePicker: {type: String, default:()=>new Date()}
    },
    components:{VueDatePicker},
    setup(props) {
    const data = props.yyyymmdd
    let dateDefault = null
        if(data)
     dateDefault = ref(data)
    else  {
        let d = new Date()
        
        dateDefault = ref(`${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`)
    }
    
    return { dateDefault };
  },
}
</script>

<style>

</style>
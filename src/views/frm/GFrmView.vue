<template>
<radio-check-text-vue :answerType="0" :repeat="5"></radio-check-text-vue>  
</template>

<script>
import RadioCheckTextVue from '@/components/formsUtils/RadioCheckText.vue';
/**
 * 0  -> 1 radio
 * 1  -> 2 check
 * 2  -> 4 texto
 * 3  -> 8 grid Respuestas
 * 
 */

export default {
components:{
  RadioCheckTextVue
},
  data: () => ({   
  
  }),

  computed: {},

  methods: {
  
  },
};
</script>

<style></style>

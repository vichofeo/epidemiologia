<template>
    <v-container>
      <v-row v-for="i in repeat" >
        <v-col cols="12">
          <v-text-field
          density="compact"
        variant="underlined"
            v-model="message[i]"
            append-icon="mdi-delete-forever-outline"
            :prepend-icon="icons[answerType]"
            
            clear-icon="mdi-close-circle"
            clearable
            label="Respuesta " 
            type="text"
            @click:append="sendMessage"
            @click:clear="clearMessage(i)"
  
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
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
    
    props:{
      answerType: {type: Number, default:0},
      repeat: {type: Number, default:1}
    },
    data: () => ({   
      message: [],
      icons:[
        'mdi-radiobox-blank',
        'mdi-checkbox-marked-outline',
        'mdi-card-text-outline',
        'mdi-grid'
  
      ]
    }),
  
    computed: {},
  
    methods: {
      sendMessage() {
        this.clearMessage();
      },
      clearMessage(i) {
        this.message[i] = "";
      },
    },
  };
  </script>
  
  <style></style>
  
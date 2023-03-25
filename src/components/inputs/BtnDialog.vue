<template>
  <v-btn
    class="text-none ms-4 text-white"
    dark
    @click="dialog = true"
    variant="flat"
    size="small"
    color="success"
    prepend-icon="mdi-newspaper-variant-multiple-outline"
    density="compact"
  >
    Nuevo
  </v-btn>
  <v-dialog
    v-model="dialog"
    :scrollable="true"
    
    persistent
    :fullscreen="false"
      :scrim="false"
    
  >
    <v-card>
      <v-toolbar dark color="secondary">
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <question-answer-form v-if="type=='P'"/>
      <v-divider></v-divider>
      
    </v-card>
  </v-dialog>
</template>

<script>
import QuestionAnswerForm from "@/components/formsUtils/QuestionAnswerForm.vue";
export default {
  components: {QuestionAnswerForm},
  props: {
    type: { type: String, default: "P" },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style></style>

<template>


   






    <v-card class="mx-auto" density="compact">
        <v-card-item class="text-body-1">
            <v-toolbar  density="compact" rounded>
                <v-toolbar-title class="text-subtitle-2">Pregunta</v-toolbar-title>
                <v-divider  inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark class="text-subtitle-2"> Editar | Eliminar </v-btn>
            </v-toolbar>

        </v-card-item>
<v-card-text>respuestas</v-card-text>
    </v-card>






    <div>
        <v-expansion-panels class="mb-6" variant="inset">
            <v-expansion-panel v-for="i in 3" :key="i">
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" color="blue-darken-1">
                    <v-row no-gutters>
                        <v-col cols="5" class="d-flex justify-start"> Start and end dates </v-col>
                        <v-col cols="6" class="text--secondary d-flex justify-end">
                            <v-btn @click="k21" density="compact">ki cloc</v-btn>
                        </v-col>
                        <v-col cols="1">..</v-col>
                    </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>aki componente de preguntas</v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>

    <div>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    <v-row no-gutters>
                        <v-col cols="4" class="d-flex justify-start"> Start and end dates </v-col>
                        <v-col cols="8" class="text--secondary d-flex justify-end">
                            <v-btn @click="k21" class="text-button">ki cloc</v-btn>
                        </v-col>
                    </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-row justify="space-around" no-gutters> cuadoras </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    data: () => ({
        date: null,
        trip: {
            name: "",
            location: null,
            start: null,
            end: null,
        },
        locations: ["Australia", "Barbados", "Chile", "Denmark", "Ecuador", "France"],
        dialog: false,
    }),
    methods: {
        k21() {
            alert("ok")
        }
    }
};
</script>

<template>
    <div>

        <v-row no-gutters>
            <v-radio-group inline :label="items.label" v-model="dataModel">
                <v-radio :label="obj.label" color="orange-darken-3" :value="obj.value"
                    v-for="(obj, i) in items.options"></v-radio>

            </v-radio-group>
            {{ dataModel }}
        </v-row>

    </div>
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
    props: {
        items: { type: Object, default: () => { } }
    },
    data: () => ({
        dataModel: "",
    }),
};
</script>
  
<style></style>
  
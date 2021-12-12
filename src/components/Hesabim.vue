
<template>
  <div>
    <v-expand-transition id="expand">
      <v-card height="auto" width="auto" id="card">
        <deneme />
      </v-card>
    </v-expand-transition>
  </div>
</template>
<script>
import deneme from "./DenemeComp.vue";
export default {
  name: "hesabim",
  components: {
    deneme,
  },
};
</script>

<template>
  <div class="erkek">
    <h1 id="baslık">Erkek adam Ayakkabıları</h1>
    <Filt />
    <v-row id="row">
      <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100545-02${
            n + 3
          }_CF.webp`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <v-row id="row">
      <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300417-00${
            n + 0
          }_CF.webp`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col> </v-row
    ><v-row id="row">
      <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100707-00${
            n + 6
          }_CF.webp`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>



<style scoped>
#baslık {
  margin-left: 620px;
}
#row {
  z-index: 0;
}
</style>

<script>
import Filt from "../components/Filter.vue";
export default {
  name: "erkek",
  data() {
    return {};
  },
  components: {
    Filt,
  },
};
</script>
<template>
  <div class="kadın">
    <Filt />
    <h1 id="baslık">Kadın Ayakkabıları</h1>
    <v-row>
      <v-col v-for="n in 5" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K201147-02${
            n + 0
          }_F.webp`"
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
    <v-row>
      <v-col v-for="n in 5" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K200508-04${
            n + 4
          }_F.webp`"
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
</style>

<script>
import Filt from "../components/Filter.vue";
export default {
  components: {
    Filt,
  },
  name: "kadın",
};
</script>
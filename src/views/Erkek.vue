<template>
  <div class="erkek">
    <h1 id="baslık">Erkek Ayakkabıları</h1>
    <Filt />

    <v-row id="row" style="padding-top:50px;">
      <v-col
        v-for="(item, index) in this.$store.state.itemserkek"
        :key="index"
        cols="3"
        style="padding:0px;"
      >
      <div id="divayakkabi">
      <a href="#/urundty" class="fill-div">
        <v-img :src="item.image" aspect-ratio="1" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div style="display:flex; flex-direction:column; margin-left:30px; margin-top:16px; margin-bottom:20px; color:black;">
          <span style="z-index:1; margin-bottom:6px;">Twins</span>
          <span style="z-index:1">₺1.599</span>
        </div>
      </a>
      </div>
      </v-col>
    </v-row>
  </div>
</template>



<style scoped>
#ayakkabidiv{
  height: auto;
  width: auto;
  
}
.fill-div{
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
}
#baslık {
  margin-top: 90px;
  font-size: 25px;
  font-weight: normal;
  text-align: center;
}
#row {
  margin-top: -700px;
  width: 100%;
}


</style>

<script>
import Filt from "../components/Filter.vue";
export default {
  beforeCreate() {
    this.$store.dispatch("fetchItemsForErkek");
  },
  name: "erkek",
  components: {
    Filt,
  },
};
</script>
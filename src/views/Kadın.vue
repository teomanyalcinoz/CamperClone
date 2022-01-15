<template>
  <div class="kadın">
    <h1 id="baslık">Kadın Ayakkabıları</h1>
        <v-btn to="urundty">Urun detay</v-btn>
    
    <Filt />
    <v-row id="row" style="padding-top:50px;">
      
      <v-col
        v-for="(item, index) in this.$store.state.itemskadin"
        :key="index"
        cols="3"
        style="padding:0px;"
      >
      <div id="divayakkabi">
      <a href="javascript:void(0)" class="fill-div">
        <v-img :src="item.image" aspect-ratio="1">
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
#app{
  position: unset;
}

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
  margin-left: 680px;
  margin-top: 90px;
  font-size: 25px;
  font-weight: normal;
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
    this.$store.dispatch("fetchItemsForKadin");
  },
  components: {
    Filt,
  },
  name: "kadın",
};
</script>
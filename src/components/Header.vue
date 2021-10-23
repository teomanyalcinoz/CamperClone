<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar class="fixedtoolbar">
      <router-link to="/">
        <v-img
          src="@/assets/camper.png"
          alt=""
          contain
          height="50px"
          width="150px"
        ></v-img>
      </router-link>
      <v-toolbar-items
        ><v-btn flat to="/kadın">Kadın</v-btn>
        <v-btn flat to="/erkek">Erkek</v-btn>
        <v-btn flat to="/cocuk">Çocuk</v-btn>
        <v-btn flat to="/sezon">Sezon Ortasi İndirimi</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items
        ><v-btn flat to="/magaza">Mağaza Bul</v-btn>
        <v-btn 
        id="hesabimbtn" 
        @mouseover="expand=true"
        @mouseleave="expand=false"
        flat
        >Hesabım</v-btn>
        <Hesabim 
         v-show="expand"
        ></Hesabim>
        
        

        <v-btn icon>
          <v-icon>mdi-basket</v-icon>
        </v-btn>
        <v-spacer> </v-spacer>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<style scoped>
.fixedtoolbar {
  position: sticky;
}

#hesabimbtn {
  padding-bottom: 250px;
}
</style>

<script>
import Hesabim from "./Hesabim.vue";

export default {
  name: "header",
  components: {
    Hesabim
  },
  data() {
    return {
      expand: false,
    };
  },
};
</script>

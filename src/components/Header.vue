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
        ><v-btn flat to="/magaza" id="magazabtn">Mağaza Bul</v-btn>
        <v-btn 
        id="hesabimbtn" 
        @mouseover="expand=true"
        flat
        >Hesabım</v-btn>

        <div @mouseleave="expand=false">
        <Hesabim
          
          v-show="expand" id="hesabimexpand"
         
        ></Hesabim>
        </div>
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
#magazabtn {
  position: fixed;
    bottom: 0px;
    right: 179px;
    
}

#hesabimbtn {
    position: fixed;
    bottom: 0px;
    right: 75px;
}

#hesabimexpand {
    margin-top: 65px;
    justify-self: right;
    margin-right: -65px;
    background-color: cornflowerblue;
       
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
      hesabimm: document.getElementById('hesabimexpand'),
      
    };
  },
};
</script>

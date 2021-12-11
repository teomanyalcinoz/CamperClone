<template>
  <v-card color="grey lighten-4" flat height="65px" tile>
    <v-toolbar class="fixedtoolbar">
      <div @mouseover="dropshow = false, dropshow2 = false, dropshow3 = false">
      <router-link to="/" >
        <v-img
          src="@/assets/camper.png"
          alt=""
          contain
          height="25px"
          width="150px"
        ></v-img>
      </router-link>
      </div>
      <v-toolbar-items>
        <v-text id="kd">Kadın</v-text>
        <v-btn id="kadinbtn" class="buton" @mouseover="dropshow = true,dropshow2=false,dropshow3=false" flat to="/kadın"
          >Kadın</v-btn
        >
        <div @mouseleave="dropshow = false">
          <Drop v-show="dropshow" id="dropexpand"></Drop>
        </div>

        <v-text id="er">Erkek</v-text>
        <v-btn @mouseover="dropshow2 = true,dropshow=false,dropshow3=false" id="erkekbtn" class="buton" flat to="/erkek"
          >Erkek</v-btn
        >
        <div @mouseleave="dropshow2 = false">
          <Drop2 v-show="dropshow2" id="dropexpand2"></Drop2>
        </div>

        <v-text id="ck">Çocuk</v-text>
        <v-btn @mouseover="dropshow3 = true,dropshow=false,dropshow2=false" class="buton" id="cocukbtn" flat to="/cocuk"
          >Çocuk</v-btn
        >
        <div @mouseleave="dropshow3 = false">
          <Drop3 v-show="dropshow3" id="dropexpand3"></Drop3>
        </div>
         <v-text id="hesappp">Hesabım</v-text>
         <v-text id="magazaaa">Mağaza Bul</v-text>
        <v-text id="thewsbutton">The Walking Society</v-text>
        <v-btn
          @mouseover="(dropshow = false), (dropshow2 = false), (dropshow3 = false)"
          id="twsbtn"
          flat
          to="/tws"
          class="buton"
          >TheWalkingSociety</v-btn>
      
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items id="s" ><v-text-field append-icon="mdi-magnify" label="ARAMA"></v-text-field></v-toolbar-items>
      <v-toolbar-items>
        
        
        <v-btn flat to="/magaza" id="magazabtn" class="buton" @mouseover="expand = false">Mağaza Bul</v-btn>
      
        <v-btn id="hesabimbtn" @mouseover="expand = true" flat>Hesabım</v-btn>

        <div @mouseleave="expand = false">
          <Hesabim v-show="expand" id="hesabimexpand"></Hesabim>
        </div>

        <v-btn
          icon
          @mouseover="expand = false"
          class="btn btn-secondary"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Camper'ınızı almak için Sepete Ekle butonuna tıklayın."
        >
        <v-icon>mdi-basket</v-icon>
        </v-btn>
        <v-spacer> </v-spacer>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>



<style scoped>
.buton:hover{
  text-decoration: none;
}
.fixedtoolbar {
  position: sticky;
}
#s{
  position: fixed;
  margin-left: 1050px;
  margin-top: 25px;  
}
#magazaaa{
  position: fixed;
  margin-top: 20px;
  margin-left: 1125px;
}
#magazabtn {
  position: fixed;
  bottom: 0px;
  right: 179px;
  background-color:white;
  opacity: 0;
  color: black;
}
#kd{
  position: fixed;
  margin-left: 20px;
  margin-top: 20px;
}
#kadinbtn {
  position: fixed;
  bottom: 0px;
  color: black;
  background-color: white;
  opacity: 0;
}
#er{
  position: fixed;
  margin-left: 105px;
  margin-top: 20px;
}
#erkekbtn {
  position: fixed;
  bottom: 0px;
  left: 252px;
  color: black;
  background-color: white;
  opacity: 0;
}
#ck{
  position: fixed;
  margin-left: 190px;
  margin-top: 20px;
}
#cocukbtn {
  position: fixed;
  bottom: 0px;
  left: 335px;
  background-color: white;
  color: black;
  opacity: 0;
}
#hesappp{
  position: fixed;
  margin-top: 20px;
  margin-left: 1258px;
}
#hesabimbtn {
  position: fixed;
  bottom: 0px;
  right: 75px;
  background-color: white;
  color: black;
  opacity: 0;
}
#thewsbutton{
  position: fixed;
  margin-left: 275px;
  margin-top: 20px;
}
#twsbtn {
  position: fixed;
  bottom: 0px;
  left: 424px;
  background-color: white;
  color: black;
  opacity: 0;
}
#hesabimexpand {
  z-index: 2;
  margin-top: 65px;
  justify-self: right;
  margin-right: -65px;
  background-color: white;
  width: 300px;
}
#dropexpand {
  z-index: 2;
  margin-top: 65px;
  background-color: white;
}
#dropexpand2{
  z-index: 2;
  margin-top: 65px;
  background-color: white;
  margin-left: 80px;
}
#dropexpand3 {
  z-index: 2;
  margin-top: 65px;
  background-color: white;
  margin-left: 165px;
}
</style>
  
<script>
import Hesabim from "./Hesabim.vue";
import Drop from "./Dropdown.vue";
import Drop2 from "./Dropdown2.vue";
import Drop3 from "./Dropdown3.vue";

export default {
  name: "header",
  components: {
    Hesabim,
    Drop,
    Drop2,
    Drop3,
  },

  data() {
    return {
      expand: false,
      dropshow: false,
      dropshow2: false,
      dropshow3: false,
    };
  },
};
</script>

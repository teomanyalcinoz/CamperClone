<template>
  <v-card id="headermaincard" height="65px">
    <v-toolbar class="fixedtoolbar">
      <div
        @mouseover="
          (dropshow = false), (dropshow2 = false), (dropshow3 = false)
        "
      >
        <router-link to="/">
          <v-img
            src="@/assets/camper.png"
            alt=""
            contain
            height="40px"
            width="150px"
          ></v-img>
        </router-link>
      </div>
      <v-toolbar-items>
        <v-text id="kd">KADIN</v-text>
        <v-btn
          id="kadinbtn"
          class="buton"
          @mouseover="
            (dropshow = true), (dropshow2 = false), (dropshow3 = false)
          "
          flat
          to="/kadın"
          >Kadın</v-btn
        >
        <div @mouseleave="dropshow = false">
          <Drop v-show="dropshow" id="dropexpand"></Drop>
        </div>

        <v-text id="er">ERKEK</v-text>
        <v-btn
          @mouseover="
            (dropshow2 = true), (dropshow = false), (dropshow3 = false)
          "
          id="erkekbtn"
          class="buton"
          flat
          to="/erkek"
          >Erkek</v-btn
        >
        <div @mouseleave="dropshow2 = false">
          <Drop2 v-show="dropshow2" id="dropexpand2"></Drop2>
        </div>

        <v-text id="ck">ÇOCUK</v-text>
        <v-btn
          @mouseover="
            (dropshow3 = true), (dropshow = false), (dropshow2 = false)
          "
          class="buton"
          id="cocukbtn"
          flat
          to="/cocuk"
          >Çocuk</v-btn
        >
        <div @mouseleave="dropshow3 = false">
          <Drop3 v-show="dropshow3" id="dropexpand3"></Drop3>
        </div>
        <v-text id="hesappp">Hesabım</v-text>
        <v-text id="magazaaa">Mağaza Bul</v-text>
        <v-text id="thewsbutton">The Walking Society</v-text>
        <v-text id="giftguide">GIFT GUIDE</v-text>
        <v-btn
          @mouseover="
            (dropshow = false), (dropshow2 = false), (dropshow3 = false)
          "
          id="twsbtn"
          flat
          to="/tws"
          class="buton"
          >TheWalkingSociety</v-btn
        >
        <v-btn
          @mouseover="
            (dropshow = false), (dropshow2 = false), (dropshow3 = false)
          "
          flat
          id="gift"
          to="/gift"
          class="buton"
          >Gift Guide</v-btn
        >
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items id="s">
        <v-icon id="iccon">mdi-magnify</v-icon>
        <v-btn
          id="sBtn"
          flat
          class="buton"
          x-small
          to="/search"
          elevation="10"
        ></v-btn>
        <v-text-field label="ARAMA"> </v-text-field
      ></v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          flat
          to="/magaza"
          id="magazabtn"
          class="buton"
          @mouseover="expand = false"
          >Mağaza Bul</v-btn
        >

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
#headermaincard {
  min-height: 0px;
}
i.v-icon.v-icon {
  color: black;
}
#iccon {
  position: fixed;
  margin-top: 5px;
  margin-left: 180px;
}
.buton:hover {
  text-decoration: none;
}
.fixedtoolbar {
  position: sticky;
}
#sBtn {
  position: fixed;
  margin-top: -15px;
  margin-left: 175px;
  height: 10px;
  opacity: 0;
}
#s {
  position: fixed;
  margin-left: 1040px;
  margin-top: 25px;
}
#magazaaa {
  position: fixed;
  margin-top: 20px;
  margin-left: 1125px;
}
#magazabtn {
  position: fixed;
  bottom: 0px;
  right: 150px;
  background-color: white;
  opacity: 0;
  color: black;
  width: 100px;
}
#kd {
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
#er {
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
#ck {
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
#hesappp {
  position: fixed;
  margin-top: 20px;
  margin-left: 1220px;
}
#hesabimbtn {
  position: fixed;
  bottom: 0px;
  right: 50px;
  background-color: white;
  color: black;
  opacity: 0;
}
#thewsbutton {
  position: fixed;
  margin-left: 275px;
  margin-top: 20px;
}
#giftguide {
  position: fixed;
  margin-left: 440px;
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
#gift {
  position: fixed;
  bottom: 0px;
  left: 600px;
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
  width: 360px;
}
#dropexpand {
  z-index: 2;
  margin-top: 65px;
  background-color: white;
}
#dropexpand2 {
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

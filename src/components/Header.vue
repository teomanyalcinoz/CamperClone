<template>
  <v-card color="grey lighten-4" flat height="65px" tile>
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
      <v-toolbar-items>

        <v-btn id="kadinbtn" @mouseover="dropshow=true" flat to="/kadın">Kadın</v-btn>
        <div @mouseleave="dropshow=false">
        <Drop v-show="dropshow" id="dropexpand"></Drop>
        </div>

        <v-btn  @mouseover="dropshow2=true" id="erkekbtn" flat to="/erkek">Erkek</v-btn>
        <div @mouseleave="dropshow2=false">
          <Drop2  v-show="dropshow2" id="dropexpand"></Drop2>
        </div>

        <v-btn @mouseover="dropshow3=true" id="cocukbtn" flat to="/cocuk">Çocuk</v-btn>
        <div @mouseleave="dropshow3=false">
          <Drop3  v-show="dropshow3" id="dropexpand"></Drop3>
        </div>


        <v-btn @mouseover="dropshow=false,dropshow2=false,dropshow3=false" id="twsbtn" flat to="/tws">TheWalkingSociety</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items
        ><v-btn flat to="/magaza" id="magazabtn" @mouseover="expand = false"
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
.fixedtoolbar {
  position: sticky;
}
#magazabtn {
  position: fixed;
  bottom: 0px;
  right: 179px;
}
#kadinbtn{
  position: fixed;
}


#erkekbtn{
  position: fixed;
  bottom: 0px;
  left: 252px;
}
#cocukbtn {
  position: fixed;
  left: 335px;
}

#hesabimbtn {
  position: fixed;
  bottom: 0px;
  right: 75px;
}
#twsbtn{
  position: fixed;
  left: 424px;
}

#hesabimexpand {
  z-index: 2;
  margin-top: 65px;
  justify-self: right;
  margin-right: -65px;
  background-color: white;

}

#dropexpand {
  z-index: 2;
  margin-top: 65px;
  width: 400px;
  background-color: white;
  
}


</style>
  
<script>
import Hesabim from "./Hesabim.vue";
import Drop from "./Dropdown.vue";
import Drop2 from "./Dropdown2.vue"
import Drop3 from "./Dropdown3.vue"

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

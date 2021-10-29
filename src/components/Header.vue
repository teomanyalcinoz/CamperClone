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
        <v-btn flat to="/kadın">Kadın</v-btn>
        <v-btn flat to="/erkek">Erkek</v-btn>
        <v-btn flat to="/cocuk">Çocuk</v-btn>
        <v-btn flat to="/tws">TheWalkingSociety</v-btn>
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

        <v-btn icon @mouseover="expand = false">
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
  z-index: 2;
  margin-top: 65px;
  justify-self: right;
  margin-right: -65px;
  background-color: cornflowerblue;
  width: 280px;
}
.dropbtn {
  background-color: white;
  color: black;
  padding: 10px;
  font-size: 15px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  margin-left: 0px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: white;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: white;
}
</style>
  
<script>
import Hesabim from "./Hesabim.vue";
import Drop from "./Dropdown.vue";

export default {
  name: "header",
  components: {
    Hesabim,
    Drop,
  },

  data() {
    return {
      expand: false,
    };
  },
};
</script>

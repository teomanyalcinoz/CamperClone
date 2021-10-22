<template>
  <div id="maindiv">
    <Header></Header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </div>
</template>

<style>
</style>

<script>
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./views/MainPage.vue";

export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-pinterest",
      "mdi-youtube",
    ],
  }),
  name: "app",
  components: {
    Navbar,
    Footer,
    Main,
    Header,
  },
};
</script>




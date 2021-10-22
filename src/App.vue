<template>
  <div id="maindiv">
    <v-card color="grey lighten-4" flat height="100px" tile>
      <v-toolbar scroll-toolbar-off-screen tile>
        <img src="./assets/camper.png" height="30" />
        <v-btn depressed flat>Kadın</v-btn>
        <v-btn depressed flat>Erkek</v-btn>
        <v-btn depressed flat>Çocuk</v-btn>

        <v-spacer></v-spacer>
        <v-text-field
          append-icon="mdi-magnify"
          class="mx-4"
          id="search"
          flat
          hide-details
          label="ARAMA"
          solo-inverted
        ></v-text-field>

        <v-btn depressed flat>Mağaza Bul</v-btn>
        <v-btn depressed flat>Hesabım</v-btn>

        <v-btn icon>
          <v-icon>mdi-basket</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<style>
</style>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/MainPage.vue";
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
  },
};
</script>




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

    <v-row>
      <v-col class="d-flex child-flex" cols="12" sm="12">
        <v-card>
          <v-img src="./assets/camper_gif.gif" aspect-ratio="2" class="images">
            <v-text class="lilspan"> 11. Sayı: Kıbrıs </v-text>
            <v-spacer></v-spacer>
            <v-text class="gifspan"> The Walking Society<br /> </v-text>

            <v-btn depressed elevation="2" floating class="butonlar" id="btn1"
              >Kampanyaya Göz Atın</v-btn
            >
          </v-img>
        </v-card>
      </v-col>

      <v-col class="d-flex child-flex" sm="12" cols="12">
        <v-card>
          <v-img
            :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/22fa517d-a949-4119-a210-cbb08370536a/T93_Peu-Stedium_2000x1125_desktop.avif={}`"
            aspect-ratio="2"
            class="images"
          >
            <v-text class="peuspan"> PeuStadium </v-text>
            <v-spacer></v-spacer>
            <v-text class="colspan"> Koleksiyonu Keşfet<br /> </v-text>
            <v-btn depressed elevation="2" floating class="butonlar" id="btn2"
              >Daha Fazlası</v-btn
            >
          </v-img>
        </v-card>
      </v-col>

      <v-col class="d-flex child-flex" cols="6">
        <v-card>
          <v-img
            :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/2429b0c7-0187-4d37-b5e4-ef9d3293b1ae/T93-Gender-Walden-Women-desktop.avif={}`"
            aspect-ratio="1"
            class="images"
          >
            <v-btn depressed elevation="2" floating class="butonlar" id="btn3"
              >Kadın</v-btn
            >
          </v-img>
        </v-card>
      </v-col>

      <v-col class="d-flex child-flex" cols="6">
        <v-img
          :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/7cf1e10a-0c2f-4505-9835-c52f97182916/T93-Gender-Walden-Men-desktop.avif={}`"
          aspect-ratio="1"
          class="images"
        >
          <v-btn depressed elevation="2" floating class="butonlar" id="btn4"
            >Erkek</v-btn
          >
        </v-img>
      </v-col>

      <v-col class="d-flex child-flex" cols="12">
        <v-img
          :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/c565ea73-9386-4b44-bd51-8389176cde27/T93_Store-locator-Dist-desktop.avif={}`"
          aspect-ratio="2"
          class="images"
        >
          <v-btn depressed elevation="2" floating class="butonlar" id="btn5"
            >En Yakın Mağazayı Bul</v-btn
          >
        </v-img>
      </v-col>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<style scoped src="@/assets/styles/style.css">
</style>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  data: () => ({
    items: ["All", "Family", "Friends", "Coworkers"],
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
  },
};
</script>




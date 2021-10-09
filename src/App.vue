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
        <v-img
          align-center
          src="./assets/camper_gif.gif"
          aspect-ratio="2"
          class="grey lighten-2">

          <div>
            <span class="gifspan">
              11. Sayı: Kıbrıs<br>
            </span>

            <span class="gifspan">
              The Walking Society<br>
            </span>

            <v-btn
              depressed
              elevation="2"
              id="btnkampanya"
            >Kampanyaya Göz Atın</v-btn>
          </div>
          

        

        </v-img>
        </v-card>
      </v-col>
      
      <v-col class="d-flex child-flex" sm="12" cols="12">
        <v-img
          :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/22fa517d-a949-4119-a210-cbb08370536a/T93_Peu-Stedium_2000x1125_desktop.avif={}`"
          aspect-ratio="1"
          class="grey lighten-2"

        ></v-img>
      </v-col>
      
      <v-col class="d-flex child-flex" cols="6">
        <v-img
          :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/2429b0c7-0187-4d37-b5e4-ef9d3293b1ae/T93-Gender-Walden-Women-desktop.avif={}`"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="6">
        <v-img
          :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/7cf1e10a-0c2f-4505-9835-c52f97182916/T93-Gender-Walden-Men-desktop.avif={}`"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="12">
        <v-img
          :src="`https://www.camper.com/cms/api/assets/tiers-banners-homes/c565ea73-9386-4b44-bd51-8389176cde27/T93_Store-locator-Dist-desktop.avif={}`"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </v-col>
    </v-row>
    <v-footer padless>
      <v-card flat tile class="text-center">
        <v-card-text class="white--text pt-0">
          Kaydolun ve %10 İndirim Kazanın Camper Ailesi'nin bir parçası olmak
          size özel promosyonlara ve hikayelere erişim sağlayacaktır.Kaydolun ve
          %10 İndirim Kazanın Camper Ailesi'nin bir parçası olmak size özel
          promosyonlara ve hikayelere erişim sağlayacaktır.Kaydolun ve %10
          İndirim Kazanın Camper Ailesi'nin bir parçası olmak size özel
          promosyonlara ve hikayelere erişim sağlayacaktır.Kaydolun ve %10
          İndirim Kazanın Camper Ailesi'nin bir parçası olmak size özel
          promosyonlara ve hikayelere erişim sağlayacaktır.Kaydolun ve %10
          İndirim Kazanın Camper Ailesi'nin bir parçası olmak size özel
          promosyonlara ve hikayelere erişim sağlayacaktır.Kaydolun ve %10
          İndirim Kazanın Camper Ailesi'nin bir parçası olmak size özel
          promosyonlara ve hikayelere erişim
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text id="text">
          <v-card-text id="date"
            >{{ new Date().getFullYear() }} —
            <strong>Camper</strong></v-card-text
          >
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="30px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<style scoped src="@/assets/styles/style.css">
#text {
  margin-left: 660px;
}
#date {
  margin-left: 30px;
  font-size: medium;
}


</style>

<script>
import Navbar from "./components/Navbar";
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
  },
};
</script>




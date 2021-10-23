<template>
  <v-footer padless>
    <v-card flat tile class="text-center">
      <v-card-text class="white--text pt-0">
        Kaydolun ve %10 İndirim Kazanın Camper Ailesi'nin bir parçası olmak size
        özel promosyonlara ve hikayelere erişim sağlayacaktır.Kaydolun ve %10
        İndirim Kazanın Camper Ailesi'nin bir parçası olmak size özel
        promosyonlara ve hikayelere erişim sağlayacaktır.Kaydolun ve %10 İndirim
        Kazanın Camper Ailesi'nin bir parçası olmak size özel promosyonlara ve
        hikayelere erişim sağlayacaktır.Kaydolun ve %10 İndirim Kazanın Camper
        Ailesi'nin bir parçası olmak size özel promosyonlara ve hikayelere
        erişim sağlayacaktır.Kaydolun ve %10 İndirim Kazanın Camper Ailesi'nin
        bir parçası olmak size özel promosyonlara ve hikayelere erişim
        sağlayacaktır.Kaydolun ve %10 İndirim Kazanın Camper Ailesi'nin bir
        parçası olmak size özel promosyonlara ve hikayelere erişim BULUT YELKEN
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text id="text">
        <v-card-text id="date"
          >{{ new Date().getFullYear() }} — <strong>Camper</strong></v-card-text
        >

        <div id="divicons">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            id="icons"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="30px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
#date {
  margin-left: 680px;
  font-size: large;
}
#divicons {
  margin-left: 650px;
}
</style>

<script>
export default {
  name: "footer",
  data() {
    return {
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram",
        "mdi-pinterest",
        "mdi-youtube",
      ],
    };
  },
};
</script>
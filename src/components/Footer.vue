<template>
  <v-footer padless>
    <v-card flat tile class="text-center">
      <v-card-text class="white--text pt-0">
        <div id="ilkd">
          <div>
            <div id="kayıtBaslık">Kaydolun ve %10 indirim kazanın</div>
            <div>
              Camper Ailesi'nin bir parçası olmak size özel promosyonlara ve
              <br />
              hikayelere erişim sağlayacaktır.
            </div>
          </div>
        </div>
      </v-card-text>
      <Abone />
      <v-card-text>
        <v-divider></v-divider>
        <div id="yand">
          <div>
            <v-btn id="phone" icon>
              <v-icon>mdi-phone</v-icon>
            </v-btn>
            <div id="kayıtBaslık">Müşteri Hizmetleri</div>
            <div>
              Ayrıca, iletişim formunu doldurarak da bizimle iletişime <br />
              geçebilirsiniz. Çalışma saatlerimiz her gün 09:00 - 19:00. Resmi
              tatiller hariç. Bizi arayın: 0850 777 27 37
            </div>
          </div>
        </div>
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
#kayıtBaslık {
  font-weight: bold;
  font-size: 20px;
}
#phone {
  margin-left: 37px;
  font-size: 50px;
}
#ilkd {
  margin-top: 0px;
  margin-left: 40px;
}
#yand {
  margin-left: 1140px;
  margin-top: 0px;
}
#date {
  margin-left: 680px;
  font-size: large;
}
#divicons {
  margin-left: 650px;
}

</style>

<script>
import Abone from "./AboneOl.vue";
export default {
  name: "footer",
  components: {
    Abone,
  },
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
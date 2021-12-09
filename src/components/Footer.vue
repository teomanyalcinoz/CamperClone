<template>
  <v-footer id="footer" padless>
    <v-row>
      <v-col id="col1">
        <h3>Kaydolun ve %10 İndirim Kazanın</h3>
        <span>Camper ailesinin bir parçası olmak kişiye özel tekliflere, indirimlere ve promosyonlara erişim sağlar.</span><br>
        <!-- <v-btn id="btnabone">Abone Ol</v-btn> -->
        <Abone/>
        
      </v-col>
      <v-col id="col2">
        <v-row>
          <v-col> 
            <span class="baslik">Camper.com Alışverişleriniz</span><br>
            <span>Sipariş Takibi</span><br>
            <span>Ödeme</span><br>
            <span>Gönderim</span><br>
            <span>İade ve değişimler</span><br>
            <span>Ürün garantisi</span><br>
            <span>Sitemap</span>
          </v-col>
          
          <v-col> 
            <span class="baslik">Müşteri hizmetleri</span><br>
            <span>Sss</span><br>
            <span>İletişim</span><br>
            <span>Gizlilik İlkeleri</span><br>
            <span>Kullanim koşullari</span><br>
          </v-col>

          <v-col> 
            <span class="baslik">Camper Hakkında</span><br>
            <span>Tarihçe</span><br>
            <span>Camper together</span><br>
            <span>Social Responsibility</span><br>
            <span>Iş imkanlari</span><br>
          </v-col>
        </v-row>
      </v-col>

      <v-col id="col3">
        <v-row>
             <v-icon x-large>mdi-phone-outline</v-icon>
          <v-col>
            <span style="font-size:22px">Müşteri Hizmetleri</span><br>
            <span>Ayrıca, iletişim formunu doldurarak da bizimle iletişime geçebilirsiniz.
               Çalışma saatlerimiz her gün 09:00 - 19:00. Resmi tatiller hariç.</span><br>
            <p>
                <a
                href="javascript:void(0)"
                id="linksiparis"
                class="boldclass"
                style="color:black"
                >Bizi arayın: 0850 777 27 37
                </a>
            </p>
          </v-col>
        </v-row>
        <v-row>
            <v-icon style="margin-right:10px" x-large>mdi-home-search-outline</v-icon>
          <div>
            <span style="font-size:22px">Camper Mağazaları</span>
            <p>
                  <a
                  href="javascript:void(0)"
                  style="color:black"
                  >Size en yakin mağazayi bulun
                  </a>
            </p>
          </div>
        </v-row>
      </v-col>

    </v-row>
    <v-row >
      <span style="margin:20px">© Camper, 2021</span>
      <div id="icons">
        <v-icon large>mdi-facebook</v-icon>
        <v-icon large>mdi-twitter</v-icon>
        <v-icon large>mdi-linkedin</v-icon>
        <v-icon large>mdi-instagram</v-icon>
        <v-icon large>mdi-pinterest</v-icon>
        <v-icon large>mdi-youtube</v-icon>
      </div>
      
        <img id="bayrak" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png">
        <p>
                <a
                href="javascript:void(0)"
                class="boldclass"
                id="linkturkey"
                > Türkiye / Türkçe
                </a>
          </p>
        
      
    </v-row>
  </v-footer>
</template>

<style scoped>
#footer {
  font-size: small;
  background-color: #dfdfdf;
}

.baslik{
  font-weight: bold;
}

#linkturkey{
  color: black;
  font-size: 14px;
  margin-right: 30px;
}

#turkeydiv {
  padding-top: 10px;  
  margin-right: 50px;
  
}
#bayrak {
  width: 34px;
  height: 24px;
  margin-right: 8px;
}

#footer {
  padding-top: 30px;
}

#icons {
  margin-left: auto;
  margin-bottom: 10px;
  width: 50%;
  padding: 10px;
}

#col1,
#col2,
#col3{
  padding: 40px; 
}

#btnabone {
  font-size: 16px;
  height: 40px;
  background: #dfdfdf;;
  color: black;
  text-transform: none;
  margin-top: 20px;
  width: 120px;
  height: 45px;
  border-radius: 0px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  box-shadow: none;
  transition: 0.2s;
  
}

#btnabone:hover {
  color: white;
  background-color: black;
}
</style>

<script>
import Abone from "./AboneOl.vue";
import Turkey from "../assets/turkey.svg"

export default {
  name: "footer",
  components: {
    Abone,
    Turkey
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
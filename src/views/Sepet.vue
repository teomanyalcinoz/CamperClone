<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      padding-left: 200px;
      padding-right: 100px;
      margin-top: 30px;
      margin-bottom: 100px;
      column-gap: 80px;
    "
  >
  <h1>{{ $route.params.id }} </h1>
    <div style="display: flex; flex-direction: column">
      <span style="font-size: x-large; font-weight: 400"
        >Alisveris SEPETİNİZDE</span
      >
      <div
        style="
          display: flex;
          flex-direction: row;
          width: 800px;
          justify-content: space-between;
        "
      >
        <span style="font-size: 10px; margin-top: 4px"
          >SEPETİNİZDE 1 ÜRÜN VAR.</span
        >
        <div style="display: flex; flex-direction: row">
          <a
            href="javascript:void(0)"
            style="
              font-size: 12px;
              color: black;
              text-decoration: none;
              margin-right: 4px;
            "
            >ALIŞVERİŞE DEVAM ET</a
          >
          <v-icon small style="margin-top: 2px">mdi-plus-circle-outline</v-icon>
        </div>
      </div>
      <hr
        style="
          height: 0.5px;
          border-width: 0;
          background-color: #e1e1e1;
          margin-top: 10px;
        "
      />
      <div style="display: flex; flex-direction: row">
        <img
          src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/K100226-017_L.webp"
          style="width: 120px; margin: 10px 0px"
        />
        <div style="display: flex; flex-direction: column; padding: 12px">
          <span>Runner</span>
          <div id="sizefiyatcarpidiv">
            <div>
              <span style="margin-right: 6px">SIZE</span>
              <span>42</span>
            </div>
            <span style="margin-left: -500px">₺1499</span>
            <button><v-icon small>mdi-close</v-icon></button>
          </div>
        </div>
      </div>
      <hr style="height: 0.5px; border-width: 0; background-color: #e1e1e1" />

      <span
        style="
          text-align: center;
          font-size: 24px;
          margin-top: 80px;
          margin-bottom: 30px;
        "
        >Tercihe bağlı ekstralar ve aksesuarlar</span
      >
      <div
        style="
          display: flex;
          justify-content: center;
          column-gap: 10px;
          font-size: 14px;
        "
      >
        <a
          id="a1"
          href="javascript:void(0)"
          onclick="document.getElementById('a2').style.textDecoration='none';
                                                          document.getElementById('a1').style.textDecoration='underline';"
          @click="(sheet1 = !sheet1), (sheet2 = false)"
          style="color: black"
          >En çok tercih edilenler</a
        >
        <a
          id="a2"
          href="javascript:void(0)"
          onclick="document.getElementById('a2').style.textDecoration='underline';
                                                          document.getElementById('a1').style.textDecoration='none';"
          @click="(sheet2 = !sheet2), (sheet1 = false)"
          style="color: black; text-decoration: none"
          >Kıyafetler</a
        >
      </div>
      <v-sheet
        max-width="900"
        style="margin-top: 40px; margin-left: -60px"
        v-if="sheet1"
      >
        <v-slide-group multiple show-arrows>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8124-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Protect & Care 200 ml</span>
                  <span>₺139</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8124-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Clean & Care 200 ml</span>
                  <span>₺139</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8142-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Shoe Cream Black</span>
                  <span>₺69</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8142-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Shoe Cream Neutral</span>
                  <span>₺69</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/L8141-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Nano Pro</span>
                  <span>₺149</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <v-sheet
        max-width="900"
        style="margin-top: 40px; margin-left: -60px"
        v-if="sheet2"
      >
        <v-slide-group multiple show-arrows>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/KU10004-003_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>T-Shirt</span>
                  <span>₺559</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/KU10005-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Sweatshirt</span>
                  <span>₺903</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/KU10004-004_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Protect & Care 200 ml</span>
                  <span>₺559</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/KU10006-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>Hoodie</span>
                  <span>₺1159</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/KU10004-002_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>T-Shirt</span>
                  <span>₺657</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
          <v-slide-item style="margin-right: 14px">
            <div>
              <a href="javascript:void(0)" style="text-decoration: none">
                <v-img
                  src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/KU10004-001_L.jpg"
                ></v-img>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    color: black;
                    margin: 10px;
                  "
                >
                  <span>T-Shirt</span>
                  <span>₺657</span>
                </div>
                <button id="eklebtn" elevation="0">Ekle</button>
              </a>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <hr
        style="
          height: 0.5px;
          border-width: 0;
          color: #e1e1e1;
          background-color: #e1e1e1;
          margin-top: 60px;
        "
      />
      <v-expansion-panels>
        <v-expansion-panel id="expanel">
          <v-expansion-panel-header style="font-size: 16px; font-weight: 500"
            >Siparis bedelimi nasil ödeyebilirim?</v-expansion-panel-header
          >
          <v-expansion-panel-content style="font-size: 14px">
            <p style="margin-bottom: 20px">
              Ödemenizi kredi kartı ile yapabilirsiniz. (VISA, MasterCard,
              American Express)
            </p>

            <a href="javascript:void(0)" style="color: black; font-weight: 500"
              >Hakkında daha fazla bilgi Ödemeler hakkında daha fazla bilgi</a
            >
          </v-expansion-panel-content>
          <hr
            style="
              height: 0.5px;
              border-width: 0;
              color: #e1e1e1;
              background-color: #e1e1e1;
            "
          />
        </v-expansion-panel>
        <v-expansion-panel id="expanel">
          <v-expansion-panel-header style="font-size: 16px; font-weight: 500"
            >Siparisim ne zaman gelecek?</v-expansion-panel-header
          >
          <v-expansion-panel-content style="font-size: 14px">
            <p style="margin-bottom: 20px">
              Siparisinizin ortalama teslim süresi 1-4 is günüdür. Teslimat için
              belirtilen süreler kesin olarak belirlenmis süreler degildir.
              Merkezlerden uzak beldelere yapilan gönderimlerde gönderim süresi
              1 gün uzayabilir.
            </p>

            <a href="javascript:void(0)" style="color: black; font-weight: 500"
              >Teslimat hakkinda daha fazla bilgi için</a
            >
          </v-expansion-panel-content>
          <hr
            style="
              height: 0.5px;
              border-width: 0;
              color: #e1e1e1;
              background-color: #e1e1e1;
            "
          />
        </v-expansion-panel>
        <v-expansion-panel id="expanel">
          <v-expansion-panel-header style="font-size: 16px; font-weight: 500"
            >Siparisimi iptal edebilir miyim?</v-expansion-panel-header
          >
          <v-expansion-panel-content style="font-size: 14px">
            <p style="margin-bottom: 20px">
              Siparisinizi siparis verdiginiz gün saat 23:59'a kadar iptal
              edebilirsiniz. Siparislerin çogu zaman ayni gün veya ertesi gün
              depo çikisi yapildigini unutmayin.
            </p>

            <a href="javascript:void(0)" style="color: black; font-weight: 500"
              >Iptaller hakkinda daha fazla bilgi</a
            >
          </v-expansion-panel-content>
          <hr
            style="
              height: 0.5px;
              border-width: 0;
              color: #e1e1e1;
              background-color: #e1e1e1;
            "
          />
        </v-expansion-panel>
        <v-expansion-panel id="expanel">
          <v-expansion-panel-header style="font-size: 16px; font-weight: 500"
            >Ürününmü teslim aldiktan sonra model veya beden degisimi yapabilir
            miyim?</v-expansion-panel-header
          >
          <v-expansion-panel-content style="font-size: 14px">
            <p style="margin-bottom: 20px">
              Hedefimiz her müsterimizin aldigi üründen % 100 memnun olmasidir.
              Eger aldiginiz üründen herhangi bir sebepten (beden, renk, vs...)
              memnun degilseniz, ürünün hiç kullanilmamis olmasi kosulyla, 30 is
              günü içerisinde iade edebilirsiniz.
            </p>

            <a href="javascript:void(0)" style="color: black; font-weight: 500"
              >Iade ve degisimler hakkinda daha fazla bilgi</a
            >
          </v-expansion-panel-content>
          <hr
            style="
              height: 0.5px;
              border-width: 0;
              color: #e1e1e1;
              background-color: #e1e1e1;
            "
          />
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <!-- sag taraf -->
    <div style="display: flex; flex-direction: column; margin-top: 30px">
      <v-app style="width: 300px">
        <v-select
          :items="items"
          placeholder="Nakliye"
          style="width: 450px"
        ></v-select>
      </v-app>
      <div style="margin-top: -640px; z-index: 3">
        <hr
          style="
            height: 0.5px;
            border-width: 0;
            color: black;
            background-color: black;
          "
        />
        <v-expansion-panels>
          <v-expansion-panel id="expanel">
            <v-expansion-panel-header style="font-size: 14px"
              >Promosyon kodum var</v-expansion-panel-header
            >
            <v-expansion-panel-content
              style="font-size: 14px; padding-bottom: 0px"
            >
              <div style="display: flex; flex-direction: row">
                <v-text-field
                  v-model="message4"
                  placeholder="Promotional Code"
                  outlined
                  clearable
                  style="border-radius: 0px; font-size: 14px"
                ></v-text-field>
                <button id="btnuygula">UYGULA</button>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <div>
          <hr
            style="
              height: 0.5px;
              border-width: 0;
              color: black;
              background-color: black;
            "
          />
          <div
            style="
              display: flex;
              justify-content: space-between;
              padding: 12px 12px 12px 0px;
              font-size: 14px;
            "
          >
            <span>Ana Toplam</span>
            <span>1499 TL</span>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              padding: 12px 12px 12px 0px;
              font-size: 14px;
            "
          >
            <span>KARGO TUTARI</span>
            <span>Ücretsiz</span>
          </div>
          <hr
            style="
              height: 0.5px;
              border-width: 0;
              color: black;
              background-color: black;
            "
          />
          <div
            style="
              display: flex;
              justify-content: space-between;
              padding: 12px 12px 12px 0px;
              font-size: 16px;
              font-weight: 500;
            "
          >
            <span>Toplam</span>
            <span>1499 TL</span>
          </div>
          <v-btn id="btnsatinal" elevation="0">ŞİMDİ SATIN AL</v-btn>
          <div
            style="
              padding: 12px;
              display: flex;
              justify-content: space-evenly;
              font-size: 14px;
              margin-top: 20px;
            "
          >
            <span>Müşteri hizmetleri : </span>
            <a href="javascript:void(0)" style="color: black">0850 777 27 37</a>
          </div>
          <p style="text-align: center; font-size: 14px">
            Ayrıca, iletişim formunu doldurarak da bizimle iletişime
            geçebilirsiniz. Çalışma saatlerimiz her gün 09:00 - 19:00. Resmi
            tatiller hariç.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#eklebtn {
  background-color: white;
  color: black;
  border-radius: 0px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  height: 40px;
  margin-top: 20px;
  width: 44%;
  text-align: center;
  transition: 0.2s;
  margin-left: 16px;
}
#eklebtn:hover {
  background-color: black;
  color: white;
}

#btnsatinal {
  background-color: black;
  color: white;
  border-radius: 0px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  height: 40px;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  transition: 0.2s;
}
#btnsatinal:hover {
  background-color: white;
  color: black;
}

#btnuygula {
  border-radius: 0px;
  border-style: solid;
  border-color: #e1e1e1;
  border-width: 1px;
  background-color: white;
  height: 56px;
  width: 80px;
  margin-left: 6px;
}

#btnuygula:hover {
  border-color: black;
}

#expanel::before {
  box-shadow: none;
}

#sizefiyatcarpidiv {
  display: flex;
  width: 400px;
  margin-top: 30px;
  font-size: 14px;
  width: 650px;
  justify-content: space-between;
}
</style>
<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    items: ["Nakliye-Standart", "Mağazadan Teslim Al"],
    sheet1: true,
    sheet2: false,
  }),
};
</script>


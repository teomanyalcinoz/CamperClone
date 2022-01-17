<template>
<div style="display:flex; flex-direction:row; margin-bottom:50px;">
  <div class="post">
      <h1>{{ $route.params.title }}</h1>
      <h3>{{ $route.params.id }}</h3>
    </div>
  <v-row>
    <v-col
      v-for="n in 5"
      :key="n"
      cols="6"
      style="padding:0px"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
    </v-row>


    
    <div id="dtydiv" style="font-size:24px; width:500px">
      <span style="margin-bottom:20px; font-size:30px;">Runner K21</span>
      <span style="margin-bottom:16px">₺1.599</span>
      <span style="margin-top:22px; margin-bottom:16px; font-size:15px;">Beyaz renkli, deri ve süet spor ayakkabı</span>
      <div style="display:flex; flex-direction:row; align-items:baseline; margin-bottom:14px;">
        <v-rating
            id="rating"
            background-color="black"
            dense
            hover
            length="5"
            size="20"
            value="4"
        ></v-rating>
        <a href="javascript:void(0)" style="color:black; font-size:12px; text-decoration:none;">6 İncelemeleri Gör</a>
      </div>
      <div>
        <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/K100743-013_L.webp" style="width:70px; height:70px;">
        <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/K100743-015_L.webp" style="margin-left:10px; width:70px; height:70px;">
      </div>
      <div style="display:flex; flex-direction:row; font-size:12px; justify-content: space-between; margin-top:20px; margin-bottom:20px;">
        <span>Beden Seçiniz(EU)</span>
        <a href="javascript: void(0)" style="color:black; text-decoration:none">BEDEN ÖLÇÜ TABLOSU</a>
      </div>
      <div style="display:flex; flex-direction:row; justify-content:space-between; margin-bottom:14px;">
          <button class="yoknumara">39</button>
          <button class="varnumara">40</button>
          <button class="varnumara">41</button>
          <button class="varnumara">40</button>
          <button class="varnumara">42</button>
          <button class="varnumara">43</button>
          <button class="varnumara">44</button>
          <button class="varnumara">45</button>
          
      </div>
      <v-btn id="btn" elevation="0" to="/sepet">SEPETE EKLE</v-btn>
      <a href="javascript:void(0)" style="font-size:16px; color:black; margin-top:14px; margin-bottom:20px;">3,6 veya 8 taksit ile ödeme imkanı</a>
      <div style="display:flex; flex-direction:row;">
        <v-checkbox 
            :on-icon="'mdi-heart'"
            :off-icon="'mdi-heart-outline'"
            id="checkbox"
        ></v-checkbox>
        <span style="margin-top:22px; margin-left:14px; font-size:14px;">İSTEK LİSTESİNE EKLE</span>
      </div>
      <hr style="height:0.5px;border-width:0;color:#e1e1e1;background-color:#e1e1e1">
      <div style="font-size:14px; padding-top:10px; padding-bottom:40px;">
        <span>799 TL üzeri alışverişlerde ücretsiz kargo</span>
        <p style="padding-top:14px; padding-bottom:14px;">Camper ailesinin bir parçası olmak kişiye özel tekliflere, indirimlere ve promosyonlara erişim sağlar.</p>  
        <span>Kaydolun ve %10 İndirim Kazanın</span>
      </div>
      <hr style="height:0.5px;border-width:0;color:#e1e1e1;background-color:#e1e1e1">
       <v-expansion-panels>
            <v-expansion-panel id="expanel">
                <v-expansion-panel-header>AYAKKABI BAKIMI</v-expansion-panel-header>
                <v-expansion-panel-content style="font-size:14px">
                    <p style="margin-bottom:20px">Camper ayakkabılar uzun süre dayanıklı olmaları için üst kalite malzemelerden yapılmıştır. Tek yapmanız gereken basamakları takip etmek ve... o kadar!</p>

                    <p>Ayakkabılarınıza iyi bakarsanız, çok uzun yollar gidebileceğinizi düşünüyoruz.</p>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
      <hr style="height:0.5px;border-width:0;color:#e1e1e1;background-color:#e1e1e1">
        <v-btn id="btnpaylasin" elevation="0">PAYLAŞIN</v-btn>
    </div>
</div>
</template>

<style>
#btnpaylasin{
    background-color: white;
    color: black;
    font-weight: 400;
    border-style: solid;
    border-color: #e1e1e1;
    border-width: 1px;
    border-radius: 0px;
    width: 150px;
    margin: 30px auto 0px;
}
#btnpaylasin:hover{
    background-color: black;
    color: white;
}

#expanel::before {
  box-shadow: none;
}
#dtydiv{
    display: flex;
    padding-left: 100px;
    padding-top: 50px;
    padding-right: 100px;
    flex-direction: column;
}
#checkbox{
    font-size: small;
}

#btn{
    color: white;
    background-color: black;
    border-radius: 0px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    font-weight: 400;
}

#btn:hover{
    background-color: white;
    color: black;
}

.yoknumara{
    background-color: white;
    border-style: solid;
    border-width: 1px;
    color: grey;
    border-color: #e1e1e1;
    font-size: 13px;
    padding: 6px;
}

.varnumara{
    background-color: white;
    border-style: solid;
    border-width: 1px;
    color: black;
    border-color: #e1e1e1;
    font-size: 13px;
    padding: 6px;
}

.varnumara:hover{
    background-color: black;
    color: white;
}

#rating{
    margin-right: 10px;
}
</style>

<script>
import gql from "graphql-tag";
const query = gql`
  {
    getItemById(id: 4) {
      photos
      content {
        name
      }
    }
  }
`;
export default {
  data() {
    return {
      getItemById: "",
    };
  },
  name: "urundetay",
  apollo: {
    getItemById: query,
  },
};
</script>
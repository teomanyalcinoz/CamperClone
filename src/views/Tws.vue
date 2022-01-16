<template>
  <div class="tws">
    <v-divider></v-divider>
    <div
      class="d-flex align-center mx-auto fill-height"
      :style="{ width: '1800px' }"
    >
      <Player />
      <v-container>
        <v-card>
          <v-layout id="grid-container" row style="padding-bottom: 100px">
            <v-flex xs12 md6>
              <div style="padding: 20px; color: white">
                <span style="font-size: x-large">
                  THE WALKING SOCIETY dergisi, dünyayı ilerleten ve olumlu yönde
                  değiştiren insanlardan bilgiler içeriyor.</span
                >
                <div
                  style="
                    padding: 20px;
                    color: white;
                    margin-right: -350px;
                    margin-left: 400px;
                  "
                >
                  TWS'nin ilk sayısı 2001'de yayınlandı ve konusu Camper'ın
                  memleketi olan Mallorca adasıydı. Akdeniz'in farklı
                  bölgelerini de kapsayan bu seri, 2005'te sona ermeden önce
                  dört yıl ve sekiz sayı sürdü. Bu 11. sayı, ilgi çekici bir
                  kronolojiye ve karmaşık arkeolojiye sahip bir adanın
                  araştırması ve keşfi. Bu yolculuk, adanın Akdeniz özünden ödün
                  vermeden yolculuğunu sorgluyor.
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
#h1 {
  margin-left: 600px;
}
#grid-container {
  margin-left: -320px;
  display: grid;
  width: 1600px;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
  background-color: #da291c;
  align-content: start;
  padding: 10px;
}
</style>

<script>
import Player from "../components/Player.vue";
export default {
  name: "tws",
  components: {
    Player,
  },
};
</script>
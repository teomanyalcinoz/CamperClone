<template>
  <div>
    <div class="player">
      <div id="dergi">
        <v-container>
          <v-card>
            <v-layout row wrap id="wrap">
              <v-flex xs12 md6 id="first">
                <div>THE WALKING SOCIETY KYPROS</div>
                <v-btn>Dergiyi Oku</v-btn>
                <v-btn>Dergiyi İndir</v-btn>
              </v-flex>
              <v-flex xs6 sm4 md6 id="second">
                <div>
                  Yürümek, seyahat etmek veya bir yerden bir yere gitmek
                  demektir. Aynı zamanda ilerlemek, iyileştirmek, geliştirmek ve
                  yenilik yapmak demektir. TWS, farklı sosyal, kültürel,
                  ekonomik veya coğrafi geçmişlerden gelen tüm insanlara açık
                  sanal bir toplumdur. Bireysel veya toplu olarak, hayal
                  güçlerini ve enerjilerini, daha iyi bir dünya için faydalı ve
                  olumlu fikirler ve çözümler bulmaya adarlar.
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-container>
      </div>
      <v-divider></v-divider>
      <div class="player_sizer">
        <video
          id="video"
          controls
          type="video/mp4"
          src="@/assets/video.mp4"
        ></video>
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrap {
  background-color: lemonchiffon;
}
#first {
  background-color: brown;
  color: white;
  margin-left: -325px;
}
#second {
  background-color: lemonchiffon;

  width: 200px;
}
#text {
  margin-left: 700px;
}
#dergi {
  margin-left: 100px;
}
.player {
  width: 100%;
  height: auto;
}
.player_sizer {
  width: 900px;
}
#video {
  width: 1600px;
}
</style>

<script>
export default {};
</script>

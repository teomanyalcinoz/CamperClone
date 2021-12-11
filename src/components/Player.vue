<template>
  <div>
    <div class="player">
      <div id="dergi">
        <v-container>
          <v-card>
            <v-layout row wrap id="wrap">
              <v-flex xs12 md6 id="first" style="padding:20px">
                <span style="font-size:40px; ">The Walking Society</span>
                <span style="margin-left:120px;">11. Sayı</span>
                <br/>
                <span style="font-size:26px;">Kypros</span><br/>
                <v-btn id="okubtn" class="twsbtn" elevation="0">Dergiyi Oku</v-btn>
                <v-btn id="indirbtn" class="twsbtn" elevation="0">Dergiyi İndir</v-btn>
              </v-flex>
              <v-flex xs6 sm4 md6 id="second">
                <div style="padding:24px; font-size:24px; margin-right:-300px">
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

#indirbtn{
  margin-top:30px;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  text-transform: none;
  background-color: transparent;
  color: #f5f5f5;
  transition: 0.3s;
}

#okubtn{
  margin-top:30px; 
  margin-right:10px;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  text-transform: none;
  background-color: transparent;
  color: white;
  transition: 0.3s;
}

#indirbtn:hover{
  background-color: white;
  color: black;
}

#okubtn:hover{
  background-color: white;
  color: black;
}

#wrap {
  background-color: #e3ddd2;
}
#first {
  background-color: #da291c;
  color: white;
  margin-left: -355px;
}
#second {
  background-color: #e3ddd2;

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

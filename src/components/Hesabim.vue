
<template>
  <div>
    <v-expand-transition id="expand"
      ><v-card height="auto" width="auto" id="card"
        ><div id="expanddiv">
          <v-card-text class="boldclass" id="campertext">
            Camper Hesabım
          </v-card-text>
          <v-card-text id="oturumtext">
            Oturum açın ve ayrıcalıklardan faydalanmaya başlayın
          </v-card-text>
          <v-btn small elevation="4" color="black" id="btnoturum" to="/signin"
            >Oturum Aç</v-btn
          >
          <v-card-text> Siparişinizi görmek için </v-card-text>
          <p>
            <a
              href="/"
              id="linksiparis"
              class="boldclass"
              >Siparişleriniz</a
            >
          </p>
        </div>
      </v-card>
    </v-expand-transition>
  </div>
</template>

<style scoped>
#linksiparis {
  padding-left: 16px;
}

#expanddiv {
  padding-left: 16px;
  padding-bottom: 22px;
}

#linksiparis {
  color: black;
}
#oturumtext {
  padding-top: 5px;
}

#campertext {
  font-size: 18px;
  padding-bottom: 0px;
}

#expand {
  border-block-color: "black";
  justify-items: center;
}

.boldclass {
  font-weight: bold;
  font-size: 16px;
}

#btnoturum {
  font-size: 16px;
  height: 40px;
  background: black;
  color: white;
  text-transform: none;
  margin-left: 15px;
  margin-bottom: 10px;
  width: 250px;
  border-radius: 0px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  box-shadow: none;
  transition: 0.4s;
}

#btnoturum:hover{
  color: black;
  background-color:white ;
  
}
</style>

<script>
export default {
  name: "hesabim",
  components: {},
  data() {
    return {};
  },
};
</script>

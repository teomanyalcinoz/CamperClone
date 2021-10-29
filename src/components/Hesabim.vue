
<template>
  <div>
<<<<<<< HEAD
    <v-expand-transition id="expand"
      ><v-card height="auto" width="auto" id="card"
        ><div id="expanddiv">
=======
    <v-expand-transition id="expand">
      <v-card height="auto" width="auto" id="card">
        <div id="expanddiv">
>>>>>>> 07263b1c636c99fbdfe262ad88a6ce90e927cd38
          <v-card-text class="boldclass" id="campertext">
            Camper Hesabım
          </v-card-text>
          <v-card-text id="oturumtext">
            Oturum açın ve ayrıcalıklardan faydalanmaya başlayın
          </v-card-text>
<<<<<<< HEAD
          <v-btn small elevation="4" color="black" id="btnoturum"
            >Oturum Aç</v-btn
          >
=======
          <v-btn elevation="4" color="black" id="btnoturum" to="/register"
            >Oturum Aç</v-btn
          >

          <Oturum />
>>>>>>> 07263b1c636c99fbdfe262ad88a6ce90e927cd38
          <v-card-text> Siparişinizi görmek için </v-card-text>
          <p>
            <a
              href="https://www.w3schools.com/"
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
<<<<<<< HEAD

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

=======

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

>>>>>>> 07263b1c636c99fbdfe262ad88a6ce90e927cd38
#campertext {
  font-size: 18px;
  padding-bottom: 0px;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 07263b1c636c99fbdfe262ad88a6ce90e927cd38
#expand {
  border-block-color: "black";
  justify-items: center;
}
<<<<<<< HEAD
=======
=======
    #expand{
        border-block-color: "black";
        justify-items: center;
                
    }
>>>>>>> 9f45b9584b66b8456bc0db1a358fd24908ae1f30
>>>>>>> 07263b1c636c99fbdfe262ad88a6ce90e927cd38

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
  margin-left: 70px;
  margin-bottom: 10px;
}
</style>

<script>
import Oturum from "./OturumAc.vue";
export default {
  name: "hesabim",
<<<<<<< HEAD
  components: {},
  data() {
    return {};
=======
  component: {
    Oturum,
>>>>>>> 07263b1c636c99fbdfe262ad88a6ce90e927cd38
  },
};
</script>

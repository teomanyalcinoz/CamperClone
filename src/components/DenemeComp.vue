<template>
  <div>
    <div id="expanddiv">
      <v-sheet id="sheet">
        <v-card-text class="boldclass" id="campertext">
          Camper Hesabım
        </v-card-text>

        <v-card-text id="oturumtext">
          Oturum açın ve ayrıcalıklardan faydalanmaya başlayın
        </v-card-text>

        <v-row align="center" justify="center">
          <v-btn
            color="pink"
            id="btnoturum"
            dark
            @click.stop="drawer = !drawer"
            style="
              margin-top: 18px;
              margin-bottom: 18px;
              margin-left: 28px;
              width: 240px;
            "
          >
            Oturum Aç
          </v-btn>
        </v-row>
      </v-sheet>

      <v-card-text> Siparişinizi görmek için </v-card-text>
      <p>
        <a href="/" id="linksiparis" class="boldclass">Siparişleriniz</a>
      </p>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      id="naavv"
      temporary
      height="800"
      width="500"
    >
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-left: 18px;
        "
      >
        <div>
          <v-img
            src="https://www.camper.com/assets-new/my-account-hand.gif"
            id="gif"
          ></v-img>
        </div>
        <button style="margin-bottom: 70px; margin-left: 60px">
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
      <span style="font-size: 24px; margin-left: 24px"
        >Sizi tekrar görmek güzel</span
      ><br /><br />
      <span style="font-size: 14px; margin-left: 60px"
        >Giriş yapmak için oturum açın:</span
      >
      <v-form style="margin-top: 20px; padding-left: 20px; padding-right: 20px">
        <v-text-field
          label="E-POSTA ADRESİ"
          name="email"
          type="email"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Şifre"
          name="password"
          type="password"
          outlined
          dense
        ></v-text-field>
        <p>
          <a
            href="javascript:void(0)"
            style="color: black; font-size: 12px; margin-left: 70px"
            >Forgot your password?
          </a>
        </p>
        <v-btn id="btnoturum2" dark elevation="0"> Oturum Aç </v-btn>
        <span style="font-size: 12px; margin-left: 84px; color: black"
          >Hesabınız yok mu?</span
        ><br />
        <span style="font-size: 12px; margin-left: 20px; color: black"
          >Bir Camper hesabı oluşturup avantajlardan</span
        ><br />
        <span style="font-size: 12px; margin-left: 56px; color: black"
          >yararlanmaya hemen başlayın.</span
        ><br />

        <v-row align="center" justify="center"> </v-row>
        <v-btn
          id="btnkayit"
          elevation="0"
          dark
          @click.stop="drawer2 = !drawer2"
          style="
            margin-top: 40px;
            margin-bottom: 18px;
            margin-left: 12px;
            width: 240px;
          "
        >
          Şimdi Hesap Oluştur
        </v-btn>
      </v-form>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer2"
      absolute
      id="navkayit"
      temporary
      height="800"
      width="500"
    >
      <div style="text-align:center; padding:5px">
      <span style="font-size: 24px; margin-left: 24px;"
        >Camper Hesabım</span
      >
      </div>
      <div width="200px" style="display:flex; padding:10px; text-align: center;">
        <span style="font-size: 14px;"
        >Camper hesabınızın avantajlarından faydalanmak için e-posta adresinizle ilişkili bir şifre oluşturmanız yeterlidir.
        </span>
      </div>
      <v-form style="margin-top: 20px; padding-left: 20px; padding-right: 20px">
        <v-text-field
          label="E-POSTA ADRESİ"
          name="email"
          type="email"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Create password"
          name="password"
          type="password"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Şifreyi doğrulayın"
          name="password"
          type="password"
          outlined
          dense
        ></v-text-field>
        <div style="text-align:center;  color:black; justify-items:center;">
          <v-checkbox
            v-model="checkbox"
          >
          <p slot="label" style="color:black; font-size:16px; text-align:center;">Kampanyalar ve promosyonlar hakkinda
             camper tarafindan bilgilendirilmek istiyorum</p>
          </v-checkbox>
        </div>
        <v-btn elevation="0" id="btnhesapolustur">Hesap Oluştur</v-btn>
          <p  style="text-align:center;" @click.stop="drawer2=false">
          Zaten bir hesabım var.
          </p>
      </v-form>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
#btnhesapolustur{
  color: white;
  background-color: black;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  text-transform: none;
  width: 260px;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: 0.3s;
  height: 46px;
  font-size: 16px;
}

#btnkayit {
  background-color: white;
  color: black;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  text-transform: none;
  width: 260px;
  margin-top: 30px;
  margin-bottom: 20px;
  transition: 0.3s;
}

#btnkayit:hover{
  color: white;
  background-color: black;
}

#btnoturum2 {
  background-color: black;
  color: white;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  text-transform: none;
  width: 260px;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: 0.3s;
}

#btnoturum2:hover,
#btnhesapolustur:hover {
  color: black;
  background-color: white;
}

#gif {
  width: 100px;
  margin-top: 20px;
  margin-left: 50px;
}

#sheet {
  position: relative;
  width: 520px;
}

#linksiparis {
  padding-left: 16px;
}

#expanddiv {
  padding-left: 16px;
  padding-bottom: 22px;
}
#naavv {
  background-color: white;
}
#navkayit {
  background-color: white;
  padding-top:20px ;
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
#ot {
  font-size: 16px;
  height: 40px;
  background: black;
  color: white;
  text-transform: none;
  margin-left: 15px;
  margin-top: -700px;
  width: 250px;
  border-radius: 0px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  box-shadow: none;
  transition: 0.4s;
}
#xxx {
  margin-top: -400px;
}
#btnoturum {
  font-size: 16px;
  height: 40px;
  background: black;
  color: white;
  text-transform: none;
  margin-left: 15px;
  margin-top: -200px;
  width: 250px;
  border-radius: 0px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  box-shadow: none;
  transition: 0.4s;
}

#btnoturum:hover {
  color: black;
  background-color: white;
}
</style>

<script>
export default {
  data() {
    return {
      drawer: null,
      drawer2: null,
    };
  },
};
</script>
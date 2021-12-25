<template>
  <div>
    <div v-if="!isLoggedIn" id="expanddiv">
      <v-sheet id="sheet">
        <v-card-text class="boldclass" id="campertext">
          Camper Hesabım
        </v-card-text>

        <p id="oturumtext">Oturum açın ve ayrıcalıklardan</p>

        <p style="text-align: left; margin-left: 16px; margin-bottom: 14px">
          faydalanmaya başlayın
        </p>

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

    <div v-if="isLoggedIn" id="signindiv">
        <v-sheet id="sheet">
          <v-card-text
            id="merhaba"
            style="font-weight: 400"
          >
            MERHABA,
          </v-card-text>
          <span id="loggedinmail">{{email2}}</span>
          <v-divider></v-divider>
        </v-sheet>
          <div id="loggedinmenudiv">
            
            <span class="loggedinmenu"><a href="/">Hesabım</a></span>
            <span class="loggedinmenu"><a href="/">Siparişlerim & İadelerim</a></span>
            <span class="loggedinmenu"><a href="/">Wishlist</a></span>
            <span class="loggedinmenu"><a href="/">Profilim</a></span>
          </div>
          <v-divider></v-divider>
          <v-btn :ripple="false"
            @click="logout()"
            elevation="0"
            style="margin-left: 280px; margin-bottom:-10px; margin-top:10px"
            text
            id="btnlogout"
          >
            <v-icon dark right style="margin:0px">mdi-power</v-icon>
          </v-btn>
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
        <button style="margin-bottom: 70px; margin-left: 100px">
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
      <p style="font-size: 24px; text-align: center; margin-top: 20px">
        Sizi tekrar görmek güzel
      </p>
      <br />
      <p style="font-size: 14px; text-align: center">
        Giriş yapmak için oturum açın:
      </p>
      <v-form style="margin-top: 26px; padding-left: 20px; padding-right: 20px">
        <v-text-field
          label="E-POSTA ADRESİ"
          name="email"
          type="email"
          v-model="email2"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Şifre"
          name="password"
          type="password"
          v-model="password2"
          outlined
          dense
        ></v-text-field>
        <p style="text-align: center" @click.stop="drawer3 = !drawer3">
          <a href="javascript:void(0)" style="color: black; font-size: 12px"
            >Forgot your password?
          </a>
        </p>
        <v-btn
          id="btnoturum2"
          dark
          elevation="0"
          width="100%"
          height="44px"
          @click="signin()"
        >
          Oturum Aç
        </v-btn>
        <p style="text-align: center">Hesabınız yok mu?</p>

        <p style="text-align: center">
          Bir Camper hesabı oluşturup avantajlardan yararlanmaya hemen başlayın.
        </p>

        <v-row align="center" justify="center"> </v-row>
        <v-btn
          id="btnkayit"
          elevation="0"
          dark
          height="44px"
          @click.stop="drawer2 = !drawer2"
          style="margin-top: 40px; margin-bottom: 18px; width: 100%"
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
      <div style="text-align: center; padding: 5px">
        <span style="font-size: 24px; margin-left: 24px">Camper Hesabım</span>
      </div>
      <div
        width="200px"
        style="display: flex; padding: 10px; text-align: center"
      >
        <span style="font-size: 14px"
          >Camper hesabınızın avantajlarından faydalanmak için e-posta
          adresinizle ilişkili bir şifre oluşturmanız yeterlidir.
        </span>
      </div>
      <v-form style="margin-top: 20px; padding-left: 20px; padding-right: 20px">
        <v-text-field
          label="E-POSTA ADRESİ"
          name="email"
          type="email"
          v-model="email"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Create password"
          name="password"
          type="password"
          v-model="password"
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
        <div style="text-align: center; color: black; justify-items: center">
          <v-checkbox v-model="checkbox">
            <p
              slot="label"
              style="color: black; font-size: 16px; text-align: center"
            >
              Kampanyalar ve promosyonlar hakkinda camper tarafindan
              bilgilendirilmek istiyorum
            </p>
          </v-checkbox>
        </div>

        <v-btn elevation="0" id="btnhesapolustur" width="100%" @click="signup()"
          >Hesap Oluştur</v-btn
        >
        <p style="text-align: center" @click.stop="drawer2 = false">
          Zaten bir hesabım var.
        </p>
      </v-form>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer3"
      absolute
      id="forgotpass"
      temporary
      height="800"
      width="500"
    >
      <div
        style="
          padding: 20px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-left: 18px;
        "
      >
        <p style="text-align: center; font-size: 26px">
          Retrieve your password
        </p>
        <button
          style="padding-bottom: 16px; padding-left: 18px"
          @click.stop="drawer3 = false"
        >
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
      <p
        style="
          text-align: center;
          padding-bottom: 14px;
          font-size: 15px;
          color: black;
        "
      >
        Enter the email address you used to register on Camper.com
      </p>
      <p style="text-align: center; padding-bottom: 14px; font-size: 15px">
        We will send the link to access your account to the same email address.
      </p>
      <div style="padding-left: 30px; padding-right: 30px">
        <v-text-field
          label="E-POSTA ADRESİ"
          name="email"
          type="email"
          outlined
          dense
          width="100%"
        ></v-text-field>
        <v-btn elevation="0" id="btnsifrealin" width="100%"
          >Şifrenizi Yeniden Alın</v-btn
        >
      </div>
      <p
        style="text-align: center; margin-top: 6px"
        @click.stop="drawer3 = !drawer3"
      >
        <a href="javascript:void(0)" style="color: black; font-size: 12px"
          >Volver
        </a>
      </p>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

#btnlogout:hover{
  background-color: white;
}

#loggedinmenudiv{
  display:flex;
  justify-content:space-between;
  flex-direction: column;
}

.loggedinmenu{
  font-weight: 400; 
  font-size:18px;
  margin-bottom: 5px;
}

#btnsifrealin {
  background-color: black;
  color: white;
  text-transform: none;
  width: 100%;
  border-radius: 0;
  transition: 0.3s;
  height: 40px;
}
#btnsifrealin:hover {
  background-color: white;
  color: black;
}

#btnhesapolustur {
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

#btnkayit:hover {
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
  margin-left: 70px;
}

#sheet {
  position: relative;
  width: 520px;
  margin-bottom: 10px;
}

#linksiparis {
  padding-left: 16px;
}

#expanddiv {
  padding-left: 16px;
  padding-bottom: 22px;
}
#signindiv {
  padding-left: 16px;
  padding-bottom: 22px;
}
#naavv {
  background-color: white;
}
#navkayit {
  background-color: white;
  padding-top: 20px;
}
#linksiparis {
  color: black;
}
#oturumtext {
  padding-top: 10px;
  padding-bottom: 3px;
  margin-left: 16px;
  text-align: left;
}

#campertext {
  font-size: 18px;
  padding-bottom: 0px;
}

#merhaba {
  font-size: 14px;
  padding: 0px;
  padding-top: 24px;
}

#loggedinmail{
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export default {
  el: '#loggedinmail',
  data() {
    return {
      email: "",
      password: "",
      email2: "",
      password2: "",
      drawer: null,
      drawer2: null,
      drawer3: null,
      isLoggedIn: false,
      currentUser: false,
    };
  },
  methods: {
    signup: function () {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password).then(
        (user) => {
          alert(`${this.email} icin hesap olusturdun!!!!`);
          this.$router.push("/");
        },
        (err) => {
          alert(err);
        }
      );
    },
    signin: function () {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email2, this.password2).then(
        (user) => {
          alert(`${this.email2} icin giris yapildi!!!!`);
          this.isLoggedIn = true;
          this.$router.push("/");
        },
        (err) => {
          alert(err);
        }
      );
    },
    logout: function () {
      const auth = getAuth();
      signOut(auth, this.email2, this.password2).then(() => {
        this.$router.push("/");
        this.isLoggedIn = false;
        alert("BASARIYLA CİKİS YAPTİN");
      });
    },
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
};
</script>
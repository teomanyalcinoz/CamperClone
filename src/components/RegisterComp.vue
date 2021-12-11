<template>
  <v-container class="fill-height" id="container" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0">
          
          <a
            href="/home"
            name="Camper"
            title="Ana Sayfa"
            target="_blank"
          >
            <v-img
              src="@/assets/camper.png"
              alt="Camper"
              contain
              height="200"
            ></v-img>
          </a>
          <v-card-text>
            <v-form>
              <v-text-field
                label="E-Posta Adresi"
                name="email"
                prepend-inner-icon="mdi-email"
                type="email"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                label="Şifre"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                label="Şifreyi Doğrula"
                name="password"
                prepend-inner-icon="mdi-lock-outline"
                type="password"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-btn id="olusturbtn" dark outlined x-large block  
                >Hesap Oluştur</v-btn
              >
              <v-card-actions class="text--secondary">
                <v-spacer></v-spacer>
                <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                Zaten bir hesabınız var mı?
                <a href="/signin#/signin" class="pl-2" style="color: #000000">Oturum Aç</a>
              </v-card-actions>
            </v-form>
          </v-card-text>
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {};
</script>

<style lang="css" scoped>
#olusturbtn{
  background-color: black;
}
#olusturbtn:hover {
  background-color: white;
  color: black;
}

#container{
  padding-left: 630px;
}


</style>
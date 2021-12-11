<template>
  <v-container id="cont" class="fill-height" fluid>
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
              src="@/assets/my-account-hand.gif"
              alt="Camper"
              contain
              height="200"
            ></v-img>
          </a>
          <v-card-text>
           <h1 class="display-3 text-center mt-4" id="h1">Sizi Tekrar Görmek Güzel</h1>
           <h3 class="text-center my-4" id="h3">Giriş yapmak için oturum açın:</h3>
          </v-card-text>
          <v-card-text>
            <v-form id="form">
              <v-text-field
                label="E-POSTA ADRESİ"
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
              <v-btn id="oturumbtn" x-large block 
                >Oturum Aç</v-btn
              >
              <v-card-actions class="text--secondary">
                <v-checkbox color="#000000" label="Beni Hatırla"></v-checkbox>
                <v-spacer></v-spacer>
                
                <v-btn class="ml-2 mb-2" flat to="/register" id="kayitbtn">Kayıt Ol</v-btn>
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

<style scoped>
#form{
  width: 450px;
}
#cont{
  width: 1300px;
  margin-left: 500px;
}
#kayitbtn {
  text-decoration: none;
  text-transform: none;
  width: 100px;
}
#kayitbtn:hover{
  background-color: black;
  color: white;
}
#oturumbtn{
  background-color: black;
  color: white;
}
#oturumbtn:hover {
  background-color: white;
  color: black;
}
#h1{
  margin-top: 20px;
  margin-left: 70px;
  color: black;
}
#h3{
  margin-left: 120px;
  color: black;
}
</style>
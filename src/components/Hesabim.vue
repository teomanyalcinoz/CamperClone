
<template>
<div>
    <v-expand-transition id="expand">
      <v-card height="auto" width="auto" id="card">
        <div id="expanddiv">
          <v-card-text class="boldclass" id="campertext">
            Camper Hesabım
          </v-card-text>
          <v-card-text id="oturumtext">
            Oturum açın ve ayrıcalıklardan faydalanmaya başlayın
          </v-card-text>
        <v-sheet
        height="400"
        class="overflow-hidden"
        style="position: relative;">
        <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          id="btnoturum"
          dark
          @click.stop="drawer = !drawer"
        >
          OTURUM AÇ
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      id="naavv"
      temporary
      width="500"
      height="800"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

           <v-btn small elevation="4" color="black" id="ot" to="/signin">Oturum Aç</v-btn>


        </v-sheet>
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
#naavv{
  background-color: white;
  margin-top: -103px;
  margin-left: -16px;
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
#ot{
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
#xxx{
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

#btnoturum:hover{
  color: black;
  background-color:white ;
  
}
</style>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
      }
    },
  }
</script>

<template  height="100%" width="100%">
  <div>
    <v-app id="vapp">
      <v-card>
        <v-carousel height="600" cycle>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            eager
            height="100%"
          >
            <div id="karstDiv">
              <v-text id="karst">TEIX</v-text>
              <br />
              <v-text id="karst2">Şehrin Outdoor Tarzı</v-text>
              <br />
              <v-btn id="karstBtn1" elevation="0">Kadın</v-btn>
              <v-btn id="karstBtn2" elevation="0">Erkek</v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-app>
  </div>
</template>

<style scoped>
#vapp {
  height: 500px;
}

#karstDiv {
  margin-top: 200px;
  margin-left: 700px;
}
#karstBtn1 {
  margin-top: 20px;
  margin-left: -15px;
  width: 20px;
  border-radius: 0;
  text-transform: none;
  height: 40px;
  transition: 0.2s;
}
#karstBtn2 {
  margin-top: 20px;
  margin-left: 55px;
  width: 20px;
  border-radius: 0;
  text-transform: none;
  height: 40px;
  transition: 0.2s;
}
#karstBtn:hover {
  color: white;
  background-color: black;
}
#karst {
  color: white;
  margin-left: 30px;
  font-size: 45px;
  font-weight: bold;
}
#karst2 {
  color: white;
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/d8ef2090-3810-4fbf-8edc-9ffceff15141/W44-Teix-1-Women-desktop.avif",
        },
        {
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/e421d965-68a9-4942-8172-160056f1c58d/T93-W44-Teix_Desktop.avif",
        },
        {
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/e3754c13-8165-4d43-bb35-e2cf19366bd2/W44-Teix-Men-1-desktop.avif",
        },
        {
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/6bfa762a-9dde-4820-a19b-e5b0695685e5/W44-Teix-Men-2-desktop.avif",
        },
      ],
    };
  },
};
</script>
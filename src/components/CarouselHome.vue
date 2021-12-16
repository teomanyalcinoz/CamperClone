<template  height="100%" width="100%">
  <div>
    <v-app id="vapp">
      <v-card>
        <v-carousel :show-arrows="false" hide-delimiters height="600" cycle>
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
              <v-text id="karst">KARST</v-text>
              <br />
              <v-text id="karst2">Doğanın Gücü</v-text>
              <br />
              <v-btn id="karstBtn" elevation="0">Koleksiyonu Keşfet</v-btn>
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
#karstBtn {
  margin-top: 20px;
  margin-left: -35px;
  width: 200px;
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
  margin-left: -10px;
  font-size: 45px;
  font-weight: bold;
}
#karst2 {
  color: white;
  margin-left: 20px;
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
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/64b7baa0-c499-434a-ad0d-654dea346d57/T93-KARTS-Women-Desktop.avif",
        },
        {
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/254e7f44-acef-412a-a8b8-2ef999fd41bb/Banners-T93-W41-Women-Desktop.avif",
        },
        {
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/e2c76254-2444-47f3-97f6-e6bcba0a4e1c/Banners-T93-W41-Men-Desktop.avif",
        },
        {
          src: "https://www.camper.com/cms/api/assets/tiers-banners-homes/77e13471-8ae1-4e65-ba02-cf9bee9694b4/T93-KARST-Men-Desktop.avif",
        },
      ],
    };
  },
};
</script>
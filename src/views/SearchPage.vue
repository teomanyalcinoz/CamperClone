<template >
  <div>
    <v-form>
      <v-container>
        <v-row id="row">
          <v-col cols="12" sm="9">
            <v-text-field v-model="message1" outlined clearable></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-btn id="kdb" class="btn" to="/kadın">Kadın</v-btn>
    <v-btn id="erb" class="btn" to="/erkek">Erkek</v-btn>
    <v-btn id="ccb" class="btn" to="/cocuk">Çocuk</v-btn>
    <v-row style="padding-top: 50px">
      <v-col cols="6" sm="4">
        <v-img
          src="https://www.camper.com/cms/api/assets/tiers-banners-homes/a7d893e9-8b69-43cc-85ab-195db60555d5/T93-onsite-dist-women-desktop.avif"
        ></v-img>
      </v-col>

      <v-col cols="6" sm="4">
        <v-img
          src="https://www.camper.com/cms/api/assets/tiers-banners-homes/8ea002ac-6174-4082-90bd-b22cb6f013e2/T93-onsite-dist-men-desktop.avif"
        >
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-col>

      <v-col cols="6" sm="4">
        <v-img
          src="https://www.camper.com/cms/api/assets/tiers-banners-homes/602fc976-5601-46bc-8686-8b19e96ecfdd/T93-onsite-dist-kids-desktop.avif"
        >
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
#kdb {
  position: absolute;
  margin-top: 420px;
  margin-left: 200px;
  z-index: 1;
}
.btn {
  background-color: white;
  color: black;
  border-radius: 0;
  transition: 0.3s;
}
.btn:hover {
  color: white;
  background-color: black;
}
#erb {
  position: absolute;
  margin-top: 420px;
  margin-left: 750px;
  z-index: 1;
}
#ccb {
  position: absolute;
  margin-top: 420px;
  margin-left: 1270px;
  z-index: 1;
}
#row {
  margin-left: 180px;
}
.h1 {
  color: rebeccapurple;
}
.image {
  width: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      message1: "Burada Ara",
    };
  },
};
</script>
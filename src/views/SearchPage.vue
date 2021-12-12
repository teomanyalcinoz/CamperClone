<template >
  <div>
        <v-form>
          <v-container>
            <v-row id="row">
              <v-col
                cols="12"
                sm="9"
              >
                <v-text-field
                  v-model="message1"
                  outlined
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-row style="padding-top:50px">
          <v-col
            cols="6"
            sm="4"
          >
            <v-img
              src="https://www.camper.com/cms/api/assets/tiers-banners-homes/a7d893e9-8b69-43cc-85ab-195db60555d5/T93-onsite-dist-women-desktop.avif"
              
            ></v-img>
          </v-col>

          <v-col
            cols="6"
            sm="4"
          >
            <v-img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/8ea002ac-6174-4082-90bd-b22cb6f013e2/T93-onsite-dist-men-desktop.avif">
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </v-col>

          <v-col
            cols="6"
            sm="4"
          >
            <v-img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/602fc976-5601-46bc-8686-8b19e96ecfdd/T93-onsite-dist-kids-desktop.avif">
              <div class="fill-height repeating-gradient"></div>
            </v-img>
          </v-col>
        </v-row>
  </div>
</template>

<style scoped>
#row{
    margin-left: 180px;
}
.h1{
    color: rebeccapurple;
}
.image{
    width: 400px;
}

</style>

<script>
  export default {
    data () {
      return {
        message1: 'Burada Ara',
      }
    },
  }
</script>
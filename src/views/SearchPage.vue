<template>
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
            append-icon="mdi-close-thick"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-rox>
        <div>
        <div>
            <img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/a7d893e9-8b69-43cc-85ab-195db60555d5/T93-onsite-dist-women-desktop.avif" alt="">
        </div>
        
        <div>
            <img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/8ea002ac-6174-4082-90bd-b22cb6f013e2/T93-onsite-dist-men-desktop.avif" alt="">
        </div>
        <div>
            <img src="https://www.camper.com/cms/api/assets/tiers-banners-homes/602fc976-5601-46bc-8686-8b19e96ecfdd/T93-onsite-dist-kids-desktop.avif" alt="">
        </div>
    </div>
    </v-rox>
     
    </v-container>

   
  </v-form>
</template>

<style scoped>
#row{
    margin-left: 180px;
}
.h1{
    color: rebeccapurple;
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
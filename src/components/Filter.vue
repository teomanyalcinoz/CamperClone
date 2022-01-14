<template>
  <v-container>
    <h1>{{ msg }}</h1>
    <v-layout row>
      <v-col>
        <v-btn id="filtre">
          <v-icon>mdi-filter</v-icon>
          Filtre
        </v-btn></v-col
      >

      <v-col id="text">
        <v-text id="text">10 Ürün |</v-text>
      </v-col>

      <v-app
        ><v-col class="d-flex" cols="12" sm="12">
          <v-select :items="items" label="Sıralama"></v-select> </v-col
      ></v-app>
    </v-layout>
  </v-container>
</template>



<style scoped>
#filtre {
  margin-left: -160px;
  margin-top: 20px;
}
#sel {
  margin-right: -150px;
  margin-top: -600px;
}
#sele {
  margin-right: -150px;
}
#text {
  font-weight: bold;
  margin-top: 20px;
  margin-left: 265px;
}
</style>

<script>
export default {
  props: {
    msg: String,
  },
  data: () => ({
    items: [
      {
        id: 1,
        text: "Camper'ın Seçimi",
      },
      {
        id: 2,
        text: "Fiyat(ASC)",
      },
      {
        id: 3,
        text: "Fiyat(DESC)",
      },
    ],
  }),
};
</script>

<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar>
      <router-link to="/">
        <v-img
          src="@/assets/camper.png"
          alt=""
          contain
          height="50px"
          width="150px"
        ></v-img>
      </router-link>
      <v-toolbar-items
        ><v-btn flat to="/kadın">Kadın</v-btn>
        <v-btn flat to="/erkek">Erkek</v-btn>
        <v-btn flat to="/cocuk">Çocuk</v-btn>
        <v-btn flat to="/sezon">Sezon Ortasi İndirimi</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/magaza">Mağaza Bul</v-btn>
        <v-btn flat>Hesabım</v-btn>
        <v-btn icon>
          <v-icon>mdi-basket</v-icon>
        </v-btn>
        <v-spacer> </v-spacer>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "header",
  data() {
    return {};
  },
};
</script>

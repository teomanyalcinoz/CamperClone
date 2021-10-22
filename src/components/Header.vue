<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar>
      <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
      <img src="@/assets/camper.png" height="30" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/kadın">Kadın</v-btn>
        <v-btn flat to="/erkek">Erkek</v-btn>
        <v-btn flat to="/cocuk">Çocuk</v-btn>
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

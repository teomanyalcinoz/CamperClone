<template>
    <v-card color="grey lighten-4" flat height="100px" tile>
      <v-toolbar scroll-toolbar-off-screen tile>
        <img src="@/assets/camper.png" height="30" to="/kadın"/>
        
       <div>  
        <v-btn depressed flat to="/kadın">Kadın</v-btn>
        <v-btn depressed flat to="/erkek">Erkek</v-btn>
        <v-btn depressed flat to="/cocuk">Çocuk</v-btn>
        </div>
      

        <v-spacer></v-spacer>
        <v-text-field
          append-icon="mdi-magnify"
          class="mx-4"
          id="search"
          flat
          hide-details
          label="ARAMA"
          solo-inverted
        ></v-text-field>

        <v-btn depressed flat>Mağaza Bul</v-btn>
        <v-btn depressed flat>Hesabım</v-btn>

        <v-btn icon>
          <v-icon>mdi-basket</v-icon>
        </v-btn>
      </v-toolbar>
      <router-view></router-view>
    </v-card>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
     
    };
  },
};
</script>

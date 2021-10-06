<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        id="appbar"
        absolute
        dark
        hide-on-scroll
        prominent
        scroll-target="#scrolling-techniques-4"
      >
        <v-avatar id="camper" :tile="true">
          <img :src="require('@/assets/camper.png')" alt="logo" />
        </v-avatar>
        <v-spacer></v-spacer>

        <v-btn> Magaza Bul </v-btn>

        <v-btn> HESABIM </v-btn>

        <v-btn icon>
          <v-icon>mdi-bag-personal</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="4000"
      >
        <v-container style="height: 1000px"></v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<style scoped>
#appbar {
  max-height: 50px;
  background-color: grey;
}
#camper {
  width: 20px;
}
</style>
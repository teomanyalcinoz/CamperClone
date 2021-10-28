<template>
  <div class="tws">
    <h1 id="h1">THE WALKING SOCIETY</h1>
    <v-divider></v-divider>
    <div
      class="d-flex align-center mx-auto fill-height"
      :style="{ width: '1800px' }"
    >
      <Player />
    </div>
  </div>
</template>

<style scoped>
#h1 {
  margin-left: 600px;
}
</style>

<script>
import Player from "../components/Player.vue";
export default {
  name: "tws",
  components: {
    Player,
  },
};
</script>
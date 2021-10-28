<template>
  <div class="sezon">
    <h1>THE WALKING SOCIETY</h1>
    <p>sdafdasfaoskjfeı</p>
    <Player />
    <Filter/>
  </div>
</template>

<script>
import Player from "../components/Player.vue";
import Filter from "../components/Filter.vue";
export default {
  name: "sezon",
  component: {
    Player,
    Filter,
  },
};
</script>
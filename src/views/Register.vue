<template>
  <div class="register">
    <h1 class="display-3 text-center">KAYIT OL</h1>
    <Kayıt />
  </div>
</template>

<style scoped>
#div {
  margin-top: 200px;
}
</style>

<script>
import Kayıt from "../components/RegisterComp.vue";
export default {
  name: "register",
  components: {
    Kayıt,
  },
};
</script>


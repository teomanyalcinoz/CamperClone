<template>
  <div class="signin">
    <h1 class="display-3 text-center">OTURUM AC</h1>
    <Oturum />
  </div>
</template>

<style scoped>
#div {
  margin-top: 200px;
}
</style>

<script>
import Oturum from "../components/SigninComp.vue";
export default {
  name: "signin",
  components: {
    Oturum,
  },
};
</script>


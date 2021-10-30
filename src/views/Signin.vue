
<template id="temp">
  <div class="text-center" id="signin">
    <h1 class="display-3 text-center mt-4" id="h1">Sizi Tekrar Görmek Güzel</h1>
    <h3 class="text-center my-4">Giriş yapmak için oturum açın:</h3>
    <Oturum id="oturum" class="text-center"/>
  </div>
</template>

<style scoped>
#oturum {
  margin-left: 570px;
  margin-bottom: 25px;
}


@import'~bootstrap/dist/css/bootstrap.css';
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


<template id="temp">
  <div class="text-center" id="signin">
    <Oturum id="oturum" class="text-center"/>
  </div>
</template>

<style scoped>
#oturum {
  margin-left:480px;
  margin-bottom: 25px;
}

#signin{
  padding: 30px;
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


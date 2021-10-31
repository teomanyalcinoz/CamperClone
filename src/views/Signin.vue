<<<<<<< HEAD
<template id="temp">
  <div class="text-center" id="signin">
    <h1 class="display-3 text-center mt-4" id="h1">Sizi Tekrar Görmek Güzel</h1>
    <h3 class="text-center my-4" id="h3">Giriş yapmak için oturum açın:</h3>
=======

<template id="temp">
  <div class="text-center" id="signin">
    <h1 class="display-3 text-center mt-4" id="h1">Sizi Tekrar Görmek Güzel</h1>
    <h3 class="text-center my-4">Giriş yapmak için oturum açın:</h3>
>>>>>>> 405ddbbe22e88f6647109075af6a27c664c72e98
    <Oturum id="oturum" class="text-center"/>
  </div>
</template>

<style scoped>
#oturum {
<<<<<<< HEAD
  margin-left:480px;
  margin-bottom: 25px;
}

#signin{
  padding: 30px;
}

#h1{
  margin-left: 550px;
  margin-bottom: 20px;
}
#h3{
  margin-left: 590px;
  margin-bottom: 20px;
}

=======
  margin-left: 570px;
  margin-bottom: 25px;
}


@import'~bootstrap/dist/css/bootstrap.css';
>>>>>>> 405ddbbe22e88f6647109075af6a27c664c72e98
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


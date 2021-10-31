<template>
  <div class="register">
<<<<<<< HEAD
    <h1 class="display-3 text-center">Camper Hesabım</h1>
    <span wrap>Camper hesabınızın avantajlarından faydalanmak için e-posta adresinizle ilişkili bir şifre oluşturmanız yeterlidir.</span>
    <Kayıt />
=======
    <h1 class="display-3 text-center mt-4">Camper Hesabım</h1>
    <h5 class="text-center mt-4">Camper hesabınızın avantajlarından faydalanmak için e-posta adresinizle ilişkili bir şifre oluşturmanız yeterlidir.</h5>
    <Kayit id="kayit"></Kayit>
>>>>>>> 405ddbbe22e88f6647109075af6a27c664c72e98
  </div>
</template>

<style scoped>
#div {
  margin-top: 200px;
  
}
<<<<<<< HEAD
h1 {
  font-size: 50px;
  margin-left: 575px;
  margin-bottom: 20px;
  margin-top: 20px;
}

span{
  margin-left: 380px;
}

=======
#kayit{
  margin-left: 580px;
  margin-top: 20px;
  margin-bottom: 25px;

}
@import'~bootstrap/dist/css/bootstrap.css';
>>>>>>> 405ddbbe22e88f6647109075af6a27c664c72e98
</style>

<script>
import Kayit from "../components/RegisterComp.vue";
export default {
  name: "register",
  components: {
    Kayit,
  },
};
</script>


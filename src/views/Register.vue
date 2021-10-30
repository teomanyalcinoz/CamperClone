<template>
  <div class="register">
    <h1 class="display-3 text-center mt-4">Camper Hesabım</h1>
    <h5 class="text-center mt-4">Camper hesabınızın avantajlarından faydalanmak için e-posta adresinizle ilişkili bir şifre oluşturmanız yeterlidir.</h5>
    <Kayit id="kayit"></Kayit>
  </div>
</template>

<style scoped>
#div {
  margin-top: 200px;
  
}
#kayit{
  margin-left: 580px;
  margin-top: 20px;
  margin-bottom: 25px;

}
@import'~bootstrap/dist/css/bootstrap.css';
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


<template>
  <div class="register">
    <h1 class="display-3 text-center">Camper Hesabım</h1>
    <span wrap>Camper hesabınızın avantajlarından faydalanmak için e-posta adresinizle ilişkili bir şifre oluşturmanız yeterlidir.</span>
    <Kayıt />
  </div>
</template>

<style scoped>
#div {
  margin-top: 200px;
}
h1 {
  font-size: 50px;
  margin-left: 575px;
  margin-bottom: 20px;
  margin-top: 20px;
}

span{
  margin-left: 380px;
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


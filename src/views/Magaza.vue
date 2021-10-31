<template>
  <div class="Magaza">
    <br></br>
    <h1 class="display-4 text-center" id="camperh1">Camper Mağazalar</h1>
    <br></br>
    <v-text-field class="xm-10" id="arama" placeholder="Arama Mağazası" 
    prepend-inner-icon="mdi-magnify" outlined>
    </v-text-field>
    <span id="span">Ex. Spain, Paris, Madrid, …<br></span>
    <span id="span2">En yakın mağazaları görmek için coğrafi konumunuzu etkinleştirin:</span>
    <br></br>
      <v-btn elevation="0" id="konumbtn">
      <v-icon
        left
        color="black"
        
      >mdi-crosshairs-gps
      </v-icon>
      Konumu Kullan</v-btn>
    


  </div>
</template>


<style scoped>
<<<<<<< HEAD
#camperh1{
  margin-left: 635px;
}

=======
>>>>>>> 405ddbbe22e88f6647109075af6a27c664c72e98
#konumbtn{
  text-transform: none;
  margin-left: 660px;
  margin-bottom: 50px;
<<<<<<< HEAD
=======

>>>>>>> 405ddbbe22e88f6647109075af6a27c664c72e98
}
#span2{
  margin-left: 525px;
}
#span {
  margin-left: 680px;
  font-size: 14px;
  color: gray;
}
.magaza{
  padding-top: 50px;
}
.v-text-field{
  width: 400px;
  margin:auto;
}
<<<<<<< HEAD
=======
  @import'~bootstrap/dist/css/bootstrap.css';


>>>>>>> 405ddbbe22e88f6647109075af6a27c664c72e98
</style>

<script>
export default {
  name: "magaza",
};
</script>
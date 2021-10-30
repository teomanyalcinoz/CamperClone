<template>
  <v-expand-transition id="dropexpand">
      <v-card
            height=auto
            width=250px 
            id="card"
            >
             <v-container>
                <v-card>
                    <v-layout row wrap>
                        <v-flex col-6 col-sm-4>
                            <v-btn class="buton" elevation="0px">Spor Ayakkabılar</v-btn>
                            <v-btn class="buton" elevation="0px">Günlük Ayakkabılar</v-btn>
                            
                            <v-btn class="buton" elevation="0px">Klasik Ayakkabılar</v-btn>
                            <v-btn class="buton" elevation="0px">Sandaletler</v-btn>
                            <v-btn class="buton" elevation="0px">Derİ Olmayan</v-btn>
                            <v-btn class="buton" elevation="0px">Botlar</v-btn>
                            
                        </v-flex>
                    </v-layout>
                </v-card> 
              </v-container>
                
                
               
                
            
        </v-card>

  </v-expand-transition>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.buton {
    margin: 1px;
    
}

#dropexpand {
    background-color: white;
    
}
</style>
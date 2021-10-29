<template>
  <v-expand-transition id="dropexpand">
      <v-card
            height=auto
            width=auto 
            id="card"
            >
             <v-container>
                <v-card>
                    <v-layout row wrap>
                        <v-flex xs1>
                            <v-btn class="buton">Spor Ayakkabılar</v-btn>
                            <v-btn class="buton">Günlük Ayakkabılar</v-btn>
                            
                            <v-btn class="buton">Klasik Ayakkabılar</v-btn>
                            <v-btn class="buton">Sandaletler</v-btn>
                            <v-btn class="buton">Derİ Olmayan</v-btn>
                            <v-btn class="buton">Botlar</v-btn>
                            
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
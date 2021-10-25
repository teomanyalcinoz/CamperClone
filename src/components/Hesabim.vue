
<template>
<div>
    
    <v-expand-transition id="expand"
        ><v-card
            height=auto
            width=auto 
            id="card"
            ><div id="expanddiv">
                <v-card-text class="boldclass" id="campertext">
                   Camper Hesabım
                </v-card-text>
                <v-card-text id="oturumtext">
                   Oturum açın ve ayrıcalıklardan faydalanmaya başlayın
                </v-card-text>
                <v-btn small elevation="5" color="black" id="btnoturum">Oturum Aç</v-btn>
                <v-card-text>
                    Siparişinizi görmek için
                </v-card-text>
                <p><a href="https://www.w3schools.com/">Siparişleriniz</a></p>
            </div>
        </v-card>
        
    </v-expand-transition> 

</div>

</template>

<style scoped>
    #oturumtext {
        padding-top: 5px;
    }

    #campertext {
        padding-bottom: 0px;
    }

    #expand{
        border-block-color: "black";
        justify-items: center;
        
        
    }

    .boldclass{
        font-weight: bold;
        font-size: 16px;
        
    }

    #btnoturum {
        background: black;
        color: white;
        text-transform: none;
        margin-left: 100px;
        margin-bottom: 10px;
        padding-inline: 50px;
    }

   

    

    
</style>

<script>
export default {
  name: "hesabim",
  components: { },
  data() {
    return {};
  },
};
</script>


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
                <v-btn small elevation="4" color="black" id="btnoturum">Oturum Aç</v-btn>
                <v-card-text>
                    Siparişinizi görmek için
                </v-card-text>
                <p><a href="https://www.w3schools.com/" id="linksiparis" class="boldclass">Siparişleriniz</a></p>
            </div>
        </v-card>
        
    </v-expand-transition> 

</div>

</template>

<style scoped>
    #linksiparis {
        padding-left:16px ;

    }

    #expanddiv {
        padding-left: 16px;
        padding-bottom: 22px;

    }

    #linksiparis {
        color: black;
    }
    #oturumtext {
        padding-top: 5px;
    }

    #campertext {
        font-size: 18px;
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
        font-size: 16px;
        height: 40px;
        background: black;
        color: white;
        text-transform: none;
        margin-left: 70px;
        margin-bottom: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: black;
        
    }    
    #btnoturum:hover{
        background-color: white;
        color: black;

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

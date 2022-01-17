<template>
  <div class="kadın">
    <h1 id="baslık">Kadın Ayakkabıları</h1>

    <v-btn>
      <router-link
        :to="{ name: 'urundty', params: { id: 1, title: 'ilk ayakkabi' } }"
      >
        1. ayakkabi
      </router-link>
    </v-btn>

    <v-btn>
      <router-link
        :to="{ name: 'urundty', params: { id: 2, title: 'ikinci ayakkabi' } }"
        >2. ayakkabi</router-link
      ></v-btn
    >
    <v-btn>
      <router-link
        :to="{ name: 'urundty', params: { id: 3, title: 'ucuncu ayakkabi' } }"
        >3.ayakkabi</router-link
      >
    </v-btn>
    <Filt />

    <v-row id="row" style="padding-top: 50px;">
      <v-col
        v-for="item in getItemByCategoryId"
        :key="item.id"
        cols="3"
        style="padding: 0px"
      >
        <div id="divayakkabi">
          
          <router-link
          :to="{ name: 'urundty', params: { id:  item.content.id, title: 'ilk ayakkabi' } }" style="text-decoration:none;"
          >
            <v-img :src="item.cartImage" aspect-ratio="1">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div
              style="
                display: flex;
                flex-direction: column;
                margin-left: 30px;
                margin-top: 16px;
                margin-bottom: 30px;
                color: black;
              "
            >
              <span style="z-index: 1; margin-bottom: 6px;">
                {{ item.content.name }}
              </span>
              <span style="z-index: 1;"> ₺{{ item.content.price }} </span>
            </div>
          </router-link>
          
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<style scoped>
#ayakkabidiv {
  height: auto;
  width: auto;
}
.fill-div {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
}
#baslık {
  text-align: center;
  margin-top: 90px;
  font-size: 25px;
  font-weight: normal;
}
#row {
  margin-top: -700px;
  width: 100%;
}
</style>

<script>
import gql from "graphql-tag";
import Filt from "../components/Filter.vue";
const query = gql`
  {
    getItemByCategoryId(id: 1) {
      content {
        name
        price
        id
      }
      cartImage
    }
  }
`;
export default {
  data() {
    return {
      items: "",
    };
  },
  name: "kadın",
  components: {
    Filt,
  },
  apollo: {
    getItemByCategoryId: query,
  },
};
</script>
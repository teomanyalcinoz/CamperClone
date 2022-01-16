<template>
  <div class="cocuk">
    <h1 id="baslık">Çocuk Ayakkabıları</h1>
    <Filt />
    <v-row id="row" style="padding-top: 50px">
      <v-col
        v-for="(item, index) in this.$store.state.itemscocuk"
        :key="index"
        cols="3"
        style="padding: 0px"
      >
        <div id="divayakkabi">
          <a href="#/urundty" class="fill-div">
            <v-img :src="item.image" aspect-ratio="1" class="grey lighten-2">
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
                margin-bottom: 20px;
                color: black;
              "
            >
              <div v-for="item in getItemByCategoryId" :key="item.id">
                <span style="z-index: 1; margin-bottom: 6px">{{
                  item.content.name
                }}</span>
                <span style="z-index: 1">{{ item.content.price }}</span>
              </div>
            </div>
          </a>
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
  margin-top: 90px;
  font-size: 25px;
  font-weight: normal;
  text-align: center;
}
#row {
  margin-top: -700px;
  width: 100%;
}
</style>

<script>
import gql from "graphql-tag";
import Filt from "../components/Filter.vue";
import Player from "../components/Player.vue";

const query = gql`
  {
    getItemByCategoryId(id: 3) {
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
  beforeCreate() {
    this.$store.dispatch("fetchItemsForCocuk");
  },
  name: "cocuk",
  components: {
    Filt,
    Player,
  },
  apollo: {
    getItemByCategoryId: query,
  },
};
</script>
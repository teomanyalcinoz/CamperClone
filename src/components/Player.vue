<template>
  <div class="home">
    <div class="query wrapper">
      <div v-for="item in items" :key="item.id">
        {{ item.content.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
#indirbtn {
  margin-top: 30px;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  text-transform: none;
  background-color: transparent;
  color: #f5f5f5;
  transition: 0.3s;
}

#okubtn {
  margin-top: 30px;
  margin-right: 10px;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  text-transform: none;
  background-color: transparent;
  color: white;
  transition: 0.3s;
}

#indirbtn:hover {
  background-color: white;
  color: black;
}

#okubtn:hover {
  background-color: white;
  color: black;
}

#wrap {
  background-color: #e3ddd2;
}
#first {
  background-color: #da291c;
  color: white;
  margin-left: -355px;
}
#second {
  background-color: #e3ddd2;

  width: 200px;
}
#text {
  margin-left: 700px;
}
#dergi {
  margin-left: 100px;
}
.player {
  width: 100%;
  height: auto;
}
.player_sizer {
  width: 900px;
}
#video {
  width: 1600px;
}
</style>

<script>
import gql from "graphql-tag";
export default {
  name: "tws",
  apollo: {
    items: gql`
      {
        items {
          content {
            name
            price
            id
          }
        }
      }
    `,
  },
};
</script>

<template>
  <v-main>
    <div class="post">
      <h1>{{ $route.params.title }}</h1>
      <h3>{{ $route.params.id }}</h3>
    </div>
  </v-main>
</template>

<script>
import gql from "graphql-tag";
const query = gql`
  {
    getItemById(id: 4) {
      photos
      content {
        name
      }
    }
  }
`;
export default {
  data() {
    return {
      getItemById: "",
    };
  },
  name: "urundetay",
  apollo: {
    getItemById: query,
  },
};
</script>
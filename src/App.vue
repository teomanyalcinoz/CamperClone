<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
  </div>
</template>

<style scoped>
#appbar {
  max-height: 50px;
  background-color: grey;
}
#camper {
  width: 20px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
}
header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>



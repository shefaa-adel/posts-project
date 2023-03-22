<template>
  <v-app>
    <Header />

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Space Grotesk");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Space Grotesk";
  background-color: #fefaf6;
}

.container {
  max-width: 1140px;
}
</style>

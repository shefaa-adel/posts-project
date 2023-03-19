<template>
  <v-app>
    <Header />
    
  <Footer></Footer>
</v-app>
</template>

<script>

import Header from "./components/layout/header/Header.vue";
import Footer from "./components/layout/footer/Footer.vue";

export default {
  components: { Header,Footer },
};
</script>

<style>
@import "./style/App.css";
</style>

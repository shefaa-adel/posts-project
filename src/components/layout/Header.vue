<template>
  <v-navigation-drawer v-model="sidebar" app clipped color="#FCDB67">
    <v-list>
      <v-list-item flat to="/posts"> Posts </v-list-item>
      <v-list-item flat to="/users"> Users </v-list-item>
      <v-list-item flat v-if="!isLogedIn" to="/regester"> Sign Up </v-list-item>
      <v-list-item flat v-if="!isLogedIn" to="/login"> Login </v-list-item>
      <v-list-item v-if="isLogedIn">{{ currentUser.firstName }} {{ currentUser.lastName }}</v-list-item>

      <v-list-item flat v-if="isLogedIn" @click="logout"> Logout </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar elevation="0" color="transparent">
    <v-toolbar app color="transparent" :class="{ fixedNav: isFixedNav }">
      <v-container style="display: flex">
        <v-toolbar-title class="hidden-md-and-up" style="cursor: pointer" @click="sidebar = !sidebar">
          <router-link to="#" tag="span" style="cursor: pointer">
            <img src="../../assets/images/socialy-logo-white.png" style="width: 25%" /></router-link>
        </v-toolbar-title>
        <v-toolbar-title class="hidden-sm-and-down">
          <router-link to="/" tag="span" style="cursor: pointer">
            <img src="../../assets/images/socialy-logo-white.png" style="width: 25%" />
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/posts"> Posts </v-btn>
          <v-btn flat to="/users"> Users </v-btn>
          <v-btn flat v-if="!isLogedIn" to="/regester"> Sign Up </v-btn>
          <v-btn flat v-if="!isLogedIn" to="/login"> Login </v-btn>
          <v-btn v-if="isLogedIn">{{ currentUser.firstName }} {{ currentUser.lastName }}</v-btn>

          <v-btn flat v-if="isLogedIn" @click="logout"> Logout </v-btn>
        </v-toolbar-items>
      </v-container>
    </v-toolbar>
  </v-app-bar>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      sidebar: false,
      windowTop: 0,
    };
  },

  computed: {
    ...mapGetters(["isLogedIn", "currentUser"]),
    isFixedNav() {
      return this.windowTop >= 60;
    },
  },
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
    },
    onScroll(e) {
      this.windowTop = window.top.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
.fixedNav {
  background-color: #fcdb67 !important;
  width: 100% !important;
}
</style>

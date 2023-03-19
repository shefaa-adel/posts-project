<template>

    <!-- <v-app-bar elevation="0" fixed> -->

    <v-navigation-drawer v-model="sidebar" app clipped color="#FCDB67">
      <v-list>
        <v-list-item flat to="/posts"> Posts </v-list-item>
        <v-list-item flat to="/users"> Users </v-list-item>
        <v-list-item flat v-if="!isLogedIn" to="/regester">
          Sign Up
        </v-list-item>
        <v-list-item flat v-if="!isLogedIn" to="/login"> Login </v-list-item>
        <v-list-item v-if="isLogedIn"
          >{{ currentUser.firstName }} {{ currentUser.lastName }}</v-list-item
        >

        <v-list-item flat v-if="isLogedIn" @click="logout">
          Logout
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="0" color="transparent">
      <v-toolbar app color="transparent" :class="{ fixedNav: isFixedNav }">
        <v-container style="display: flex">
          <span
            style="cursor: pointer"
            class="hidden-md-and-up"
            @click="sidebar = !sidebar"
          >
            hello
          </span>

          <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">
              <img
                src="../../../assets/socialy-logo-white.png"
                style="width: 25%"
              />
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/posts"> Posts </v-btn>
            <v-btn flat to="/users"> Users </v-btn>
            <v-btn flat v-if="!isLogedIn" to="/regester"> Sign Up </v-btn>
            <v-btn flat v-if="!isLogedIn" to="/login"> Login </v-btn>
            <v-btn v-if="isLogedIn"
              >{{ currentUser.firstName }} {{ currentUser.lastName }}</v-btn
            >

            <v-btn flat v-if="isLogedIn" @click="logout"> Logout </v-btn>
          </v-toolbar-items>
        </v-container>
      </v-toolbar>
    </v-app-bar>

    <!-- </v-app-bar> -->

    <router-view></router-view>
    


  <!-- <header>
    <nav class="container">
      <div class="logo"><router-link to="/"><img src='../../../assets/socialy-logo-white.png' ></router-link></div>
     
      <ul>
        <li><router-link to="/posts">All Posts</router-link></li>
        <li><router-link to="/users">All Users</router-link></li>
        <li v-if="!isLogedIn">
          <router-link to="/regester">Sign up</router-link>
        </li>
        <li v-if="!isLogedIn"><router-link to="/login">Log in</router-link></li>
        <li v-if="isLogedIn">
          <p>{{ currentUser.firstName }} {{ currentUser.lastName }}</p>
        </li>
        <li v-if="isLogedIn">
          <base-button @click="logout">Log out</base-button>
        </li>
      </ul>
    </nav>
   
  </header> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      windowTop: 0,
    };
  },

  computed: {
    ...mapGetters(["isLogedIn", "currentUser"]),
    isFixedNav() {
      // return this.$refs.navBar.scrollTop>=20;
      return this.windowTop >= 60;
    },
  },
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
      console.log(this.isFixedNav);
    },
    onScroll(e) {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
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
@import "./Header.css";
</style>

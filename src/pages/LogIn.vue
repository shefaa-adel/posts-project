<template>
  <base-card>
    <h2>Login now!</h2>
    <LogIn-form @login-user="login"></LogIn-form>
    <p v-if="!isValidData">Incorrect email or password</p>
    <p>Dont have an account? <router-link to="/regester">SignUp</router-link></p>
  </base-card>
</template>

<script>
import LogInForm from "../components/regestration/LogInForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { LogInForm },
  data() {
    return {
      isValidData: true,
    };
  },
  computed: {
    ...mapGetters(["isLogedIn"]),
  },
  methods: {
    ...mapActions(["loginUser"]),
    login(userData) {
      this.isValidData = true;
      this.loginUser(userData);
      if (this.isLogedIn) {
        this.$router.replace("/posts");
      } else {
        this.isValidData = false;
      }
    },
  },
};
</script>

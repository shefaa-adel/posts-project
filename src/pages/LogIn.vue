<template>
  <Cover coverTxt="Regester Now!"></Cover>
  <v-card width="60%" class="mx-auto my-15 px-15 py-15 formCard">
    <LogIn-form @login-user="login"></LogIn-form>
    <p v-if="!isValidData" class="text-red">Incorrect email or password</p>
    <p>
      Dont have an account? <router-link to="/regester">SignUp</router-link>
    </p>
  </v-card>
</template>

<script>
import LogInForm from "../components/regestration/LogInForm.vue";
import { mapActions, mapGetters } from "vuex";
import Cover from "../components/ui/Cover.vue";

export default {
  components: { LogInForm, Cover },
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

<style scoped>
@media only screen and (max-width: 600px) {
  .formCard {
    width: 100% !important;
    padding: 5px !important;
  }
}
</style>

<template>
  <Cover coverTxt="Regester Now!"></Cover>
  <v-card width="60%" class="mx-auto my-15 px-15 py-15 formCard">
    <Regesteration-form @save-user="saveUser"></Regesteration-form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </v-card>
</template>

<script>
import RegesterationForm from "../components/regestration/RegesterationForm.vue";
import Cover from "../components/ui/Cover.vue";
import { mapActions } from "vuex";

export default {
  components: { RegesterationForm, Cover },
  methods: {
    ...mapActions(["regesterUser"]),
    saveUser(newUser) {
      this.regesterUser(newUser);
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

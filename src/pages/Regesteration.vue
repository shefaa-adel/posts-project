<template>
  <base-card>
    <h2>Regester now!</h2>
    <Regesteration-form @save-user="saveUser"></Regesteration-form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </base-card>
</template>

<script>
import RegesterationForm from "../components/regestration/RegesterationForm.vue";
import { mapActions } from "vuex";

export default {
  components: { RegesterationForm },
  methods: {
    ...mapActions(["regesterUser"]),
    saveUser(newUser) {
      this.regesterUser(newUser);
    },
  },
};
</script>

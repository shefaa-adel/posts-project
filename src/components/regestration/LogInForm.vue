<template>
  <v-form @submit.prevent="login">
    <div class="my-5" :class="{ invalid: !email.isValid }">
      <label for="email">E-mail</label>
      <v-text-field
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
      <p class="text-red" v-if="!email.isValid">Email must be not empty.</p>
    </div>
    <div class="my-5" :class="{ invalid: !password.isValid }">
      <label for="password">Password</label>
      <v-text-field
        type="password"
        id="password"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      />
      <p class="text-red" v-if="!password.isValid">Password must be not empty.</p>
    </div>

    <v-sheet elevation="0" class="text-center">
      <v-btn
        type="submit"
        variant="tonal"
        color="#FCDB67"
        style="background-color: #1f1f1f"
        >Login</v-btn
      >
      <p class="text-red" v-if="!formIsValid">Please fix errors and try again..</p>
    </v-sheet>
  </v-form>
</template>

<script>
export default {
  emits: ["login-user"],
  data() {
    return {
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },

      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.val == "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val == "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    login() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const userData = {
        email: this.email.val,
        password: this.password.val,
      };
      this.$emit("login-user", userData);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.invalid label {
  color: red;
}
</style>

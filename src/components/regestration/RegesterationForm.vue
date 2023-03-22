<template>
  <v-form @submit.prevent="saveUser">
    <div class="my-5" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <v-text-field
        id="firstName"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      ></v-text-field>
      <p class="text-red" v-if="!firstName.isValid">
        First name must be not empty.
      </p>
    </div>
    <div class="my-5" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <v-text-field
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      ></v-text-field>
      <p class="text-red" v-if="!lastName.isValid">
        Last name must be not empty.
      </p>
    </div>
    <div class="my-5" :class="{ invalid: !email.isValid }">
      <label for="email">E-mail</label>
      <v-text-field
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      ></v-text-field>
      <p class="text-red" v-if="!email.isValid">Email must be not empty.</p>
    </div>
    <div class="my-5" :class="{ invalid: !password.isValid }">
      <label for="password">Password</label>
      <v-text-field
        type="password"
        id="password"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      ></v-text-field>
      <p class="text-red" v-if="!password.isValid">
        Password must be not empty.
      </p>
    </div>

    <v-sheet elevation="0" class="text-center">
      <v-btn
        type="submit"
        variant="tonal"
        color="#FCDB67"
        style="background-color: #1f1f1f"
        >Regester</v-btn
      >
      <p class="text-red" v-if="!formIsValid">
        Please fix errors and try again..
      </p>
    </v-sheet>
  </v-form>
</template>

<script>
export default {
  emits: ["save-user"],
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
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
      if (this.firstName.val == "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val == "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val == "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val == "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    saveUser() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const newUser = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        email: this.email.val,
        password: this.password.val,
      };
      this.$emit("save-user", newUser);
      this.$router.replace("/login");
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

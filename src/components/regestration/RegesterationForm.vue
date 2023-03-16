<template>
  <form @submit.prevent="saveUser">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">First name must be not empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Last name must be not empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !email.isValid }">
      <label for="email">E-mail</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
      <p v-if="!email.isValid">Email must be not empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !password.isValid }">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      />
      <p v-if="!password.isValid">Password must be not empty.</p>
    </div>

    <base-button>Regester</base-button>
    <p v-if="!formIsValid">Please fix errors and try again..</p>
  </form>
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
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

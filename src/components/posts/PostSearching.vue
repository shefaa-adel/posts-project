<template>
  <v-container>
    <v-row class="searchComponent mt-15" justify="center" align="center" no-gutters>
      <v-col cols="12" align="center">
        <p class="text-h4 text-white">Search For Your Favourite Post, Author</p>
      </v-col>
      <v-col cols="12" align="center">
        <v-text-field :loading="loading" v-model="input" id="serchInput" density="compact" variant="solo"
          label="Search Posts" class="serchInput" persistent-clear single-line hide-details></v-text-field>
        <v-btn @click="search" class="mt-5" style="background-color: #fcdb67">Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["searchInput"],
  data() {
    return { input: this.searchInput, loaded: false, loading: false };
  },
  computed: {},
  methods: {
    search() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
      if (this.input) this.$router.push(`/search/${this.input}`);
    },
  },
};
</script>

<style scoped>
.serchInput {
  width: 60%;
}

.searchComponent {
  background-image: url("../../assets/images/bg-search.jpg");
  background-size: cover;
  min-height: 280px;
  border-radius: 15px;
}

@media only screen and (max-width: 768px) {
  p {
    font-size: 1.5em !important;
  }

  .serchInput {
    width: 90%;
  }
}
</style>

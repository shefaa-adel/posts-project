<template>
  <v-sheet>
    <h2 class="ms-3">Find Your Favourite Users' Posts</h2>
    <v-list-item class="filter-option" v-for="user in allUsers" :key="user.id">
      <input type="checkbox" :id="user.id" @change="setFilters" />
      <label :for="user.id">{{ user.name }}</label>
    </v-list-item>
    <!-- <v-list-item title="hello"></v-list-item> -->
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  emits: ["filter-change"],
  computed: {
    ...mapGetters("users", ["allUsers"]),
  },
  data() {
    return {
      filters: "",
    };
  },
  methods: {
    setFilters(event) {
      const eventId = event.target.id;
      const isActive = event.target.checked;
      this.filters = {
        ...this.filters,
        [eventId]: isActive,
      };

      this.$emit("filter-change", this.filters);
    },
  },
  mounted() {
    this.allUsers.forEach(
      (user) => (this.filters = { ...this.filters, [user.id]: false })
    );
  },
};
</script>

<style scoped>
.filter-option label {
  margin-left: 0.5rem;
}
@media only screen and (max-width: 768px) {
  .filter-option {
    display: inline-block;
  }
}
</style>

<template>
  <!-- <v-sheet class="fixedFilterLabel" ><v-btn :onclick="sidebar = !sidebar">Show filters</v-btn></v-sheet> -->
  <v-navigation-drawer v-model="sidebar" app clipped color="#FCDB67">
    <h2 class="ms-3">Find Your Favourite Users' Posts</h2>
    <v-list-item class="filter-option" v-for="user in allUsers" :key="user.id">
      <input type="checkbox" :id="user.id" @change="setFilters" />
      <label :for="user.id">{{ user.name }}</label>
    </v-list-item>
  </v-navigation-drawer>

  <div
    class="hidden-md-and-up getFilters"
    :class="{ fixedFilters: isFixedFilters }"
  >
    <v-btn
      style="cursor: pointer,display: inline-block"
      @click="sidebar = !sidebar"
      elevation="0"
      color="#FCDB67"
      variant="text"
    >
      Show Filters
    </v-btn>
  </div>

  <v-sheet class="hidden-sm-and-down">
    <h2 class="ms-3">Find Your Favourite Users' Posts</h2>
    <v-list-item class="filter-option" v-for="user in allUsers" :key="user.id">
      <input type="checkbox" :id="user.id" @change="setFilters" />
      <label :for="user.id">{{ user.name }}</label>
    </v-list-item>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  emits: ["filter-change"],
  computed: {
    ...mapGetters("users", ["allUsers"]),
    onScroll(e) {
      this.windowTop = window.top.scrollY;
    },
    isFixedFilters() {
      return this.windowTop >= 100;
    },
  },
  data() {
    return {
      filters: "",
      sidebar: false,
      windowTop: 0,
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

    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
.filter-option label {
  margin-left: 0.5rem;
}
.hiddenFilters {
  display: none;
}

/* .getFilters {
  height: 60px;
  color: #fcdb67;
  background-color: rgb(39, 39, 39);
  padding: 7px;
  width: 100%;
  text-align: center;
  line-height: 40px;
} */
@media only screen and (max-width: 768px) {
  /* .filter-option {
    display: inline-block;
  } */
}
.fixedFilters {
  color: #fcdb67;
  background-color: rgb(39, 39, 39);
  height: 60px;
  position: fixed;
  z-index: 4;
  top: 60px;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 60px;
}
</style>

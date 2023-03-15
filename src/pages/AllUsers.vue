<template>
  <base-card>
    <ul>
      <user-item
        v-for="user in allUsers"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :phone="user.phone"
        :company="user.company.name"
      ></user-item>
    </ul>
  </base-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserItem from "../components/users/UserItem.vue";

export default {
  components: { UserItem },
  methods: {
    ...mapActions("posts", ["getAllPosts"]),
    ...mapActions("users", ["getAllUsers"]),
  },
  computed: {
    ...mapGetters("users", ["allUsers"]),
  },
  mounted() {
    // this.getAllUsers();
    // this.getAllPosts();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

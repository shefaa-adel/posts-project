<template>
  <Cover coverTxt="Meet our lovely users"></Cover>
  <v-container>
    <v-row no-gutters class="mt-15">
      <v-col cols="12">
        <v-row>
          <v-col v-for="user in allUsers" cols="12" md="6" lg="4">
            <user-item
              :key="user.id"
              :id="user.id"
              :name="user.name"
              :phone="user.phone"
              :company="user.company.name"
            ></user-item>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import UserItem from "../components/users/UserItem.vue";
import Cover from "../components/ui/Cover.vue";

export default {
  components: { UserItem, Cover },
  methods: {
    ...mapActions("posts", ["getAllPosts"]),
    ...mapActions("users", ["getAllUsers"]),
  },
  computed: {
    ...mapGetters("users", ["allUsers"]),
  },
  async mounted() {
    this.getAllUsers();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>

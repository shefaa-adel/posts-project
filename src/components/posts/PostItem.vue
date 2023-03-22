<template>
  <v-card class="mx-auto rounded-card" elevation="0">
    <v-img :src="postImg" height="200px" cover class="mt-0"></v-img>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle> By: {{ userName }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange-lighten-1" variant="text" :to="postDetailsLink">
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id", "title", "userId", "img"],
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapGetters("users", ["getUserById"]),
    postDetailsLink() {
      return "posts/" + this.id;
    },
    postImg() {
      return new URL(
        `../../assets/images/post${Math.floor(Math.random() * 6) + 1}.jpg`,
        import.meta.url
      ).href;
    },
  },
  created() {
    this.userName = this.getUserById(this.userId)?.name;
  },
};
</script>

<style scoped>
v-card {
  height: 300px;
}
</style>

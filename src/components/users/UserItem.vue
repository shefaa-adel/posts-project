<template>
  <v-card class="mx-auto rounded-card text-center" elevation="0">
    <v-avatar size="250">
      <v-img :src="userImg" cover class="mt-0"></v-img>
    </v-avatar>
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      {{ company }}
    </v-card-text>
    <v-card-subtitle>
      {{ phone }}
    </v-card-subtitle>
    <v-card-actions class="justify-center">
      <v-btn color="orange-lighten-1" variant="text" :to="userPostsLink">
        View posts
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["id", "name", "phone", "company"],

  computed: {
    userPostsLink() {
      return this.$route.path + "/" + this.id;
    },
    userImg() {
      return new URL(
        `../../assets/images/team-photo-${
          Math.floor(Math.random() * 3) + 1
        }.jpg`,
        import.meta.url
      ).href;
    },
  },
};
</script>


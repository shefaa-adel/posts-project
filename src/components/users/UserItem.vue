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

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

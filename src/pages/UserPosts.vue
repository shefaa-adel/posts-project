<template>
  <base-card> 
  <ul>
    <post-item
      v-for="post in userPosts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body"
      :userId="post.userId"
    ></post-item>
  </ul>
  </base-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PostItem from "../components/posts/PostItem.vue";

export default {
  components: { PostItem },
  props: ["id"],
  data(){
    return{
        userPosts:[]
    }
  },
  computed: {
    ...mapGetters("posts", ["getUserPosts"]),
  },
  mounted() {
    this.userPosts=this.getUserPosts(this.id);
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

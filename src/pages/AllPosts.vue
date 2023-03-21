<template>
  <Cover coverTxt="Read the latest and greatest from our experts"></Cover>
  <PostSearching></PostSearching>
  <PostsComponent></PostsComponent>
</template>

<script>
import PostsComponent from "../components/posts/PostsComponent.vue";
import PostSearching from "../components/posts/PostSearching.vue";
import Cover from "../components/ui/Cover.vue";

export default {
  components: { PostsComponent, PostSearching, Cover },
};
</script>

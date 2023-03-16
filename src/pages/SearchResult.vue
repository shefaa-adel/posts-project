<template>
  <base-card>
    <!-- <ul>
      <post-item
        v-for="post in filterdPosts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :userId="post.userId"
      ></post-item>
    </ul> -->
    <ul>
      <post-item
        v-if="!needsPagination"
        v-for="post in filterdPosts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :userId="post.userId"
      ></post-item>

      <post-item
        v-if="needsPagination"
        v-for="post in paginationListPosts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :userId="post.userId"
      ></post-item>
    </ul>
    <div class="text-center" v-if="needsPagination">
      <v-pagination
        class="pagination mb-2"
        v-model="page"
        :length="PagesLength"
        rounded="circle"
        @click="updatePage(page)"
      ></v-pagination>
    </div>
  </base-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PostItem from "../components/posts/PostItem.vue";

export default {
  components: { PostItem },
  props: ["input"],
  data() {
    return {
      filterdPosts: "",
      postsPerPage: 20,
      page: 1,
      paginationListCount: 0,
      paginationListPosts: [],
    };
  },
  methods: {
    setFilteredPosts() {
      this.filterdPosts = this.allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.input.toLowerCase()) ||
          post.body.toLowerCase().includes(this.input.toLowerCase())

      );

       const targetUsers= this.allUsers.filter((user) =>
          user.name.toLowerCase().includes(this.input.toLowerCase())
        )

     
      targetUsers.forEach(user=>this.filterdPosts=this.filterdPosts.concat(this.getUserPosts(user.id)))
    }, initPage() {
      this.paginationListCount = this.filterdPosts.length;
      if (this.paginationListCount < this.postsPerPage) {
        this.paginationListPosts = this.filterdPosts;
      } else {
        this.paginationListPosts = this.filterdPosts.slice(0, this.postsPerPage);
      }
    },
    updatePage(pageIndex) {
      let start = (pageIndex - 1) * this.postsPerPage;
      let end = pageIndex * this.postsPerPage;
      this.paginationListPosts = this.filterdPosts.slice(start, end);
      this.page = pageIndex;
    },
  },
  computed: {
    ...mapGetters("posts", ["allPosts",'getUserPosts']),
    ...mapGetters("users", ["allUsers"]),
    needsPagination() {
      return this.filterdPosts.length > this.postsPerPage;
    },
    PagesLength() {
      if (this.postsPerPage == null || this.filterdPosts == null) return 0;
      return Math.ceil(this.filterdPosts.length / this.postsPerPage);
    },
  },
  mounted() {
    this.setFilteredPosts();
  },
  updated() {
    this.setFilteredPosts();
  },
  created() {
    this.initPage();
    this.updatePage(this.page);
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

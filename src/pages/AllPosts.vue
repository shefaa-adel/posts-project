<template>
  <section>
    <Post-filtering @filter-change="changeContent"></Post-filtering>
  </section>
  <base-card>
    <ul>
      <post-item
        v-if="!needsPagination"
        v-for="post in filteredPosts"
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
import PostFiltering from "../components/posts/PostFiltering.vue";

export default {
  components: { PostItem, PostFiltering },
  data() {
    return {
      postsPerPage: 20,
      page: 1,
      paginationListCount: 0,
      paginationListPosts: [],
      usersFilters: "",
      filteredPosts: "",
    };
  },
  methods: {
    ...mapActions("posts", ["getAllPosts"]),
    ...mapActions("users", ["getAllUsers"]),
    initPage() {
      this.paginationListCount = this.filteredPosts.length;
      if (this.paginationListCount < this.postsPerPage) {
        this.paginationListPosts = this.filteredPosts;
      } else {
        this.paginationListPosts = this.filteredPosts.slice(0, this.postsPerPage);
      }
    },
    updatePage(pageIndex) {
      let start = (pageIndex - 1) * this.postsPerPage;
      let end = pageIndex * this.postsPerPage;
      this.paginationListPosts = this.filteredPosts.slice(start, end);
      this.page = pageIndex;
    },
    changeContent(filters) {
      this.usersFilters = filters;
      this.filteredPosts = this.allPosts.filter((post) => {
        for (const userId in this.usersFilters){
          if(this.usersFilters[userId]&& +userId === post.userId)
          return true
        }  
      });
      this.updatePage(this.page)
    },
  },
  computed: {
    ...mapGetters("posts", ["allPosts"]),
    ...mapGetters("users", ["allUsers"]),
    needsPagination() {
      return this.filteredPosts.length > this.postsPerPage;
    },
    PagesLength() {
      if (this.postsPerPage == null || this.filteredPosts == null) return 0;
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    },
  },
  mounted() {
    this.getAllUsers();
    this.getAllPosts();
    this.allUsers.forEach((user) => {
      this.usersFilters = { ...this.usersFilters, [user.id]: false };
    });
    this.filteredPosts = this.allPosts;

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

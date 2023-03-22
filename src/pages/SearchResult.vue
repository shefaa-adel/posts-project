<template>
  <Cover coverTxt="Read the latest and greatest from our experts"></Cover>
  <PostSearching :searchInput="input"></PostSearching>
  <v-container>
    <v-row no-gutters class="mt-15" v-if="filterdPosts.length">
      <v-col cols="12">
        <v-row>
          <v-col
            v-show="!needsPagination"
            v-for="post in filterdPosts"
            cols="12"
            md="6"
            lg="4"
          >
            <post-item
              :key="post.id"
              :id="post.id"
              :title="post.title"
              :userId="post.userId"
            ></post-item>
          </v-col>

          <v-col
            v-show="needsPagination"
            v-for="post in paginationListPosts"
            cols="12"
            md="6"
            lg="4"
          >
            <post-item
              :key="post.id"
              :id="post.id"
              :title="post.title"
              :userId="post.userId"
            ></post-item>
          </v-col>
        </v-row>
        <div class="text-center" v-if="needsPagination">
          <v-pagination
            class="pagination mb-2"
            v-model="page"
            :length="PagesLength"
            rounded="circle"
            @click="updatePage(page)"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
    <div v-else class="text-center">
      <h1>Not matching Results</h1>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PostItem from "../components/posts/PostItem.vue";
import PostSearching from "../components/posts/PostSearching.vue";
import Cover from "../components/ui/Cover.vue";

export default {
  components: { PostItem, PostSearching, Cover },
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

      const targetUsers = this.allUsers.filter((user) =>
        user.name.toLowerCase().includes(this.input.toLowerCase())
      );

      targetUsers.forEach(
        (user) =>
          (this.filterdPosts = this.filterdPosts.concat(
            this.getUserPosts(user.id)
          ))
      );
    },
    initPage() {
      this.paginationListCount = this.filterdPosts.length;
      if (this.paginationListCount < this.postsPerPage) {
        this.paginationListPosts = this.filterdPosts;
      } else {
        this.paginationListPosts = this.filterdPosts.slice(
          0,
          this.postsPerPage
        );
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
    ...mapGetters("posts", ["allPosts", "getUserPosts"]),
    ...mapGetters("users", ["allUsers"]),
    needsPagination() {
      return this.filterdPosts.length > this.postsPerPage;
    },
    PagesLength() {
      if (this.postsPerPage == null || this.filterdPosts == null) return 0;
      return Math.ceil(this.filterdPosts.length / this.postsPerPage);
    },
  },
  async mounted() {
    this.setFilteredPosts();
    this.initPage();
  },
  updated() {
    this.setFilteredPosts();
    this.initPage();
  },
};
</script>


<template>
  <v-container>
    <v-row no-gutters class="mt-15">
      <v-col cols="12" md="3">
        <Post-filtering @filter-change="changeContent"></Post-filtering>
      </v-col>
      <v-col cols="12" md="9" class="flex">
        <v-row>
          <v-col
            v-show="!needsPagination"
            v-for="post in filteredPosts"
            cols="12"
            md="6"
            lg="4"
          >
            <post-item
              :key="post.id"
              :id="post.id"
              :title="post.title"
              :body="post.body"
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
              :body="post.body"
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
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PostItem from "./PostItem.vue";
import PostFiltering from "./PostFiltering.vue";

export default {
  components: { PostItem, PostFiltering },
  data() {
    return {
      postsPerPage: 21,
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
        this.paginationListPosts = this.filteredPosts.slice(
          0,
          this.postsPerPage
        );
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
      if (
        Object.keys(this.usersFilters).every(
          (element) => this.usersFilters[element] === false
        )
      ) {
        this.filteredPosts = this.allPosts;
      } else {
        this.filteredPosts = this.allPosts.filter((post) => {
          for (const userId in this.usersFilters) {
            if (this.usersFilters[userId] && +userId === post.userId)
              return true;
          }
        });
      }

      this.updatePage(this.page);
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
  async mounted() {
    await this.getAllUsers();
    await this.getAllPosts();
    this.allUsers.forEach((user) => {
      this.usersFilters = { ...this.usersFilters, [user.id]: false };
    });
    this.filteredPosts = this.allPosts;
    this.initPage();
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

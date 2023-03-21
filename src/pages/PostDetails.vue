<template>
  <Cover coverTxt="Read the latest and greatest from our experts"></Cover>
  <v-card
    class="mx-auto rounded-card my-15 px-15 py-15 postCard"
    width="70%"
    elevation="5"
  >
    <v-img :src="postImg" height="450px" cover class="mt-5 cardImg"></v-img>

    <v-card-text class="mt-3 cardTitle">
      <h1>{{ selectedPost.title }}</h1>
    </v-card-text>

    <v-card-text class="cardBody">
      <h3>{{ selectedPost.body }}</h3>
    </v-card-text>
    <v-card-subtitle class="cardUser">
      <h3 class="mt-2">By: {{ user.name }}</h3>
      <h3 class="mt-1">{{ user.phone }}</h3>
      <h3 class="mt-1">{{ user.company.name }}</h3>
    </v-card-subtitle>

    <v-sheet elevation="3" class="px-10 py-10 my-10">
      <v-form @submit.prevent="sendComment">
        <div class="my-3">
          <label for="newComment">Leave a comment</label>
          <v-text-field
            id="newComment"
            v-model.trim="newComment"
          ></v-text-field>
        </div>
        <p class="errors" v-if="!formIsValid">
          Please enter a non empty comment
        </p>
        <div class="text-center">
          <v-btn type="submit" color="orange-lighten-1" variant="text"
            >Send</v-btn
          >
        </div>
        <v-list-item
          v-for="comment in comments"
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
          :title="comment.userName"
          :subtitle="comment.txt"
          class="mt-3"
        >
        </v-list-item>
      </v-form>
    </v-sheet>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Cover from "../components/ui/Cover.vue";

export default {
  components: { Cover },
  props: ["id"],
  data() {
    return {
      selectedPost: "",
      user: "",
      comments: "",
      newComment: "",
      formIsValid: true,
    };
  },
  computed: {
    ...mapGetters(["isLogedIn", "currentUser"]),
    ...mapGetters("posts", ["getPostById", "getPostComments"]),
    ...mapGetters("users", ["allUsers", "getUserById"]),
    postImg() {
      return new URL(
        `../assets/images/post${Math.floor(Math.random() * 6) + 1}.jpg`,
        import.meta.url
      ).href;
    },
  },
  methods: {
    ...mapActions("posts", ["getAllPosts", "saveComment", "getAllComments"]),
    ...mapActions("users", ["getAllUsers"]),
    validateForm() {
      if (this.newComment == "") {
        this.formIsValid = false;
      }
    },
    sendComment() {
      this.formIsValid = true;
      this.validateForm();
      if (!this.formIsValid) return;
      if (this.isLogedIn) {
        this.saveComment({
          userName:
            this.currentUser.firstName + " " + this.currentUser.lastName,
          txt: this.newComment,
          postId: this.id,
        });
        this.newComment = "";
        this.comments = this.getPostComments(this.id);
      } else {
        this.$router.push("/login");
      }
    },
  },

  created() {
    (this.selectedPost = this.getPostById(this.id)),
      (this.user = this.getUserById(this.selectedPost.userId));
  },
  async mounted() {
    await this.getAllComments();
    this.comments = this.getPostComments(this.id);
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
.errors {
  font-weight: bold;
  color: red;
}

.cardTitle {
  line-height: 40px !important;
}

@media only screen and (max-width: 768px) {
  .cardTitle {
    font-size: 0.6em;
  }
  .cardBody,
  .cardUser {
    font-size: 0.5em;
  }
}

@media only screen and (max-width: 600px) {
  .postCard {
    width: 100% !important;
    padding: 5px !important;
  }
  .errors,
  label {
    font-size: 0.5em;
  }
}
</style>

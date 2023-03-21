import axios from "axios";

export default {
  async getAllPosts(state, payload) {
    state.posts = payload;
  },
  async getAllComments(state, payload) {
    state.comments = payload;
  },
  saveComment(state, newComment) {
    state.comments.push(newComment);
  },
};

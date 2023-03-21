import axios from "axios";
export default {
  async getAllPosts({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("getAllPosts", response.data);
  },
  async getAllComments({ commit }) {
    const response = await axios.get("http://localhost:3000/comments");
    commit("getAllComments", response.data);
  },
  saveComment({ commit }, newComment) {
    newComment = { id: new Date().toDateString, ...newComment };
    axios.post(`http://localhost:3000/comments`, newComment);
    commit("saveComment", newComment);
  },
};

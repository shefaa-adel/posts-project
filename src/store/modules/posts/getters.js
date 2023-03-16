export default {
  allPosts(state) {
    return state.posts;
  },
  getPostById: (state) => (id) => {
    return state.posts.find((post) => post.id === +id);
  },
  getUserPosts: (state) => (id) => {
    return state.posts.filter((post) => post.userId === +id);
  },
  getPostComments: (state) => (id) => {
    return state.comments.filter((comment) => +comment.postId === +id);
  },
};

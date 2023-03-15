export default {
   allPosts(state){
    return state.posts
   },
   getPostById: (state) => (id) => {
    return state.posts.find(post => post.id === +id)
  },
  getUserPosts: (state) => (id) => {
    return state.posts.filter(post => post.userId === +id)
   }
   
}
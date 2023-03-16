import axios from "axios"

export default {
    getAllPosts(state){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (state.posts=response.data))
    },
    getAllComments(state){
        axios
        .get('http://localhost:3000/comments')
        .then(response => (state.comments=response.data))
    },
    saveComment(state,newComment){
        axios.post(`http://localhost:3000/comments`, {
        ...newComment
      });
        state.comments.push(newComment)
      
    }

}
import axios from "axios"

export default {
    getAllPosts(state){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (state.posts=response.data))
    }

}
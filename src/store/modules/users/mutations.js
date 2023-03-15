import axios from "axios"

export default {
    getAllUsers(state){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (state.users=response.data))
    }

}
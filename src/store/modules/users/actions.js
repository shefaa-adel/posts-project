import axios from "axios";
export default {
  async getAllUsers({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("getAllUsers", response.data);
  },
};

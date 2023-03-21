import axios from "axios";

export default {
  async getAllUsers(state, payload) {
    state.users = payload;
  },
};

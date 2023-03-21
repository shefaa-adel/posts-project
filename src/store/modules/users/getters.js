export default {
  allUsers(state) {
    return state.users;
  },
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === +id);
  },
};

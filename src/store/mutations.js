export default {
  regesterUser(_, newUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
  },
  loginUser(state, user) {
    state.isLogedIn = false;
    const regesterdUser = JSON.parse(localStorage.getItem("user"));
    if (regesterdUser&&
      regesterdUser.email === user.email &&
      regesterdUser.password === user.password
    ) {
      state.currentUser = { ...regesterdUser };
      state.isLogedIn = true;
    }
  },
  logoutUser(state){
    state.isLogedIn = false;
    state.currentUser = '';
  }
};

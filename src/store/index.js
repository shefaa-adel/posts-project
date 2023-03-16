import { createStore } from 'vuex'
import postsModule from './modules/posts/index'
import usersModule from './modules/users/index'
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

// Create a new store instance.
const store = createStore({
    modules:{
        posts:postsModule,
        users:usersModule
    },
  state () {
    return {
      isLogedIn:false,
      currentUser:'',

      
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters:rootGetters,

})

export default store;
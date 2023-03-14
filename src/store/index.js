import { createStore } from 'vuex'
import postsModule from './modules/posts/index'
import authorsModule from './modules/authors/index'
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

// Create a new store instance.
const store = createStore({
    modules:{
        posts:postsModule,
        authors:authorsModule
    },
  state () {
    return {
      
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters:rootGetters,

})

export default store;
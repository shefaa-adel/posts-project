import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from '../pages/AllPosts.vue'
import PostDetails from '../pages/PostDetails.vue'
import AuthorPosts from '../pages/AuthorPosts.vue'
import PageNotFound from '../pages/PageNotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes:  [
    { path: '/', redirect: '/posts' },
    { path: '/posts', component: AllPosts },
    {
      path: '/posts/:id',
      props:true,
      component: PostDetails,
      
    },
    {
      path: '/authors/:id',
      props:true,
      component: AuthorPosts,
      
    },
    {path:'/:notFound(.*)',component:PageNotFound}
  ],
})

export default router

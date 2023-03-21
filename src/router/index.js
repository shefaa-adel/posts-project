import { createRouter, createWebHistory } from "vue-router";
import AllPosts from "../pages/AllPosts.vue";
import PostDetails from "../pages/PostDetails.vue";
import AllUsers from "../pages/AllUsers.vue";
import UserPosts from "../pages/UserPosts.vue";
import Regesteration from "../pages/Regesteration.vue";
import LogIn from "../pages/LogIn.vue";
import SearchResult from "../pages/SearchResult.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/posts" },
    { path: "/posts", component: AllPosts },
    {
      path: "/posts/:id",
      props: true,
      component: PostDetails,
    },
    {
      path: "/users",
      component: AllUsers,
    },
    {
      path: "/users/:id",
      props: true,
      component: UserPosts,
    },
    { path: "/users/posts/:id", props: true, component: PostDetails },
    {
      path: "/regester",
      component: Regesteration,
    },
    {
      path: "/login",
      component: LogIn,
    },
    {
      path: "/search/:input",
      props: true,
      component: SearchResult,
    },
    { path: "/search/posts/:id", props: true, component: PostDetails },
    { path: "/:notFound(.*)", component: PageNotFound },
  ],
});

export default router;

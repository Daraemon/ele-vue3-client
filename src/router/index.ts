import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: {
      name: 'Home'
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/search/Search.vue")
  },
  {
    path: "/order",
    name: "Order",
    component: () =>
      import("../views/order/Order.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("../views/profile/Profile.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

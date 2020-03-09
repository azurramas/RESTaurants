import Vue from "vue";
import Router from "vue-router";
//import store from "./store"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/restaurant",
      name: "restaurant",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Restaurant.vue")
    },
    {
      path: "/reservations",
      name: "reservations",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Reservations.vue")
    },
    {
      path: "/user",
      name: "user",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/User.vue")
    }
  ]
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../components/organisms/Homepage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
  ],
});

export default router;

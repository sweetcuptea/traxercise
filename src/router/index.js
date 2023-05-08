import Vue from "vue";
import VueRouter from "vue-router";
import VPageHome from "../components/pages/VPageHome.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: VPageHome,
    },
  ],
});

export default router;

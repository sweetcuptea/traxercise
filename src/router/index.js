import Vue from "vue";
import VueRouter from "vue-router";
import VHomepage from "../components/organisms/VHomepage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: VHomepage,
    },
  ],
});

export default router;

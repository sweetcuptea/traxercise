import Vue from "vue";
import VueRouter from "vue-router";
import TxHomepage from "../components/organisms/TxHomepage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: TxHomepage,
    },
  ],
});

export default router;

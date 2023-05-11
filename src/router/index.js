import Vue from "vue";
import VueRouter from "vue-router";
import VPageHome from "../components/pages/VPageHome.vue";
import VPageCreateExercise from "../components/pages/VPageCreateExercise.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/traxercise",
      name: "homepage",
      component: VPageHome,
    },
    {
      path: "/create-exercise",
      name: "create-exercise",
      component: VPageCreateExercise,
    },
  ],
});

export default router;

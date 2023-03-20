import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/organisms/Home.vue";
import AddExercises from "../components/organisms/AddExercises.vue";
import Chart from "../components/organisms/Chart.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/add-exercises",
      name: "add-exercises",
      component: AddExercises,
    },
    {
      path: "/chart",
      name: "chart",
      component: Chart,
    },
  ],
});

export default router;

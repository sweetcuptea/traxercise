import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/organisms/Home.vue";
import AddExercisePage from "../components/organisms/AddExercisePage.vue";
import DonePage from "../components/organisms/DonePage.vue";
import HistoryPage from "../components/organisms/HistoryPage.vue";
import ChartPage from "../components/organisms/ChartPage.vue";

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
      component: AddExercisePage,
    },
    {
      path: "/done",
      name: "done",
      component: DonePage,
    },
    {
      path: "/chart",
      name: "chart",
      component: ChartPage,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryPage,
    },
  ],
});

export default router;

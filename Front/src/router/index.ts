import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import MovieListPage from "@/pages/MovieListPage.vue";
import MovieDetailPage from "@/pages/MovieDetailPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/movies",
    name: "MovieList",
    component: MovieListPage,
  },
  {
    path: "/movies/:id",
    name: "MovieDetail",
    component: MovieDetailPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

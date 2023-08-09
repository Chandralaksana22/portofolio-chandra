import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Portoview from "../views/Portoview.vue"
import OverViewVue from "../views/OverView.vue";
import CareerVue from "../views/CareerView.vue"
import ProjectDetailPage from "../views/ProjectDetailPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter(to, from, next) {
      scrollToTopSmoothly();
      next();
    },
  },
  {
    path: "/overview",
    name: "overview",
    component: OverViewVue,
    beforeEnter(to, from, next) {
      scrollToTopSmoothly();
      next();
    },
  },
  {
    path: "/portofolio",
    name: "portofolio",
    component: Portoview,
    beforeEnter(to, from, next) {
      scrollToTopSmoothly();
      next();
    },
  },
  {
    path: "/career",
    name: "career",
    component: CareerVue,
    beforeEnter(to, from, next) {
      scrollToTopSmoothly();
      next();
    },
  },
  {
    path: "/project/:slug",
    component: ProjectDetailPage,
    name: "project-detail",
    beforeEnter(to, from, next) {
      scrollToTopSmoothly();
      next();
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// Function to smoothly scroll to the top
function scrollToTopSmoothly() {
  const duration = 500; // Duration of the scroll animation in milliseconds
  const scrollStep = -window.scrollY / (duration / 15);

  function scrollAnimation() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

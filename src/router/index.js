import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OverViewVue from '../views/OverView.vue'
import ProjectDetailPage from '../views/ProjectDetailPage.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverViewVue,
    },
    { path: '/project/:slug', 
      component: ProjectDetailPage, 
      name: 'project-detail' 
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router

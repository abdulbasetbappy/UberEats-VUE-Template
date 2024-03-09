import { createRouter, createWebHistory } from 'vue-router'


import DefaultLayout from '../layout/Default.vue';
import HomeView from '../views/Home.vue';
import NotFoundViewVue from '../views/Notfound.vue';
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundViewVue,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition ||  new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 300)
    })
  }  
});

export default router;
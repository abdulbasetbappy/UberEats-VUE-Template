import { createRouter, createWebHistory } from 'vue-router'


import DefaultLayout from '../layout/Default.vue';
import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue'
import ShopView from '../views/Shop.vue';
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
        path: 'About',
        name: 'About',
        component: AboutView,
      },
      {
        path: '/Shop',
        name: 'Shop',
        component: ShopView,
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
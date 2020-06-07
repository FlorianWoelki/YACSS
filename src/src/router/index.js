import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Guides from '../views/Guides.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/guides',
    name: 'Guides',
    component: Guides,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

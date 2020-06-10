import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Guides from '../views/Guides.vue';
import Buttons from '../views/guides/Buttons.vue';
import Avatars from '../views/guides/Avatars.vue';
import Badges from '../views/guides/Badges.vue';

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
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons,
  },
  {
    path: '/avatars',
    name: 'Avatars',
    component: Avatars,
  },
  {
    path: '/badges',
    name: 'Badges',
    component: Badges,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Guides from '../views/Guides.vue';
import GuideView from '../views/guides/GuideView.vue';

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
    path: '/guides/:guide',
    component: GuideView,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;

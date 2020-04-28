import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/albums/:id',
    name: 'Album',
    component: () => import(/* webpackChunkName: "album" */ '../Album.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

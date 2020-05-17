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
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../Login.vue'),
  },
  {
    path: '/album/:id',
    name: 'Album',
    component: () => import(/* webpackChunkName: "album" */ '../Album.vue'),
  },
  {
    path: '/artist/:id',
    name: 'Artist',
    component: () => import(/* webpackChunkName: "artist" */ '../Artist.vue'),
  },
  {
    path: '/playlist/:id',
    name: 'Playlist',
    component: () =>
      import(/* webpackChunkName: "playlist" */ '../Playlist.vue'),
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () =>
      import(/* webpackChunkName: "playlists" */ '../Playlists.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

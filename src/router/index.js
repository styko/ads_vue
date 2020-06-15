import Vue from 'vue';
import VueRouter from 'vue-router';
import Ads from '../views/Ads.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/ads',
    name: 'Ads',
    component: Ads,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

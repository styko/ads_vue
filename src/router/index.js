import Vue from 'vue';
import VueRouter from 'vue-router';
import LatestAds from '../views/LatestAds.vue';
import DeactivatedAds from '../views/DeactivatedAds.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/latest-ads',
    name: 'LatestAds',
    component: LatestAds,
  },
  {
    path: '/deactivated-ads',
    name: 'DeactivatedAds',
    component: DeactivatedAds,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

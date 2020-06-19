import Vue from 'vue';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import boost from 'highcharts/modules/boost';
import Vue2Filters from 'vue2-filters';
import x5GMaps from 'x5-gmaps';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(x5GMaps, { key: process.env.VUE_APP_GTOKEN, libraries: ['places'] });

Vue.use(Vue2Filters);

Vue.use(HighchartsVue);
boost(Highcharts);

Vue.config.productionTip = false;

const isDev = process.env.NODE_ENV !== 'production';
Vue.config.performance = isDev;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

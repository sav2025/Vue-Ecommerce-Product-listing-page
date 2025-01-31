javascript
CopyEdit
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './store';
import Home from './views/Home.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: Home },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');

import Vue from 'vue/dist/vue.js';
import Router from 'vue-router';
import Home from '../components/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      'path': '/',
      'name': 'home',
      'component': Home
    }
  ]
});
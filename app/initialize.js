import Vue from 'vue/dist/vue.js';
import Resource from 'vue-resource';
import App from './app.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

Vue.use(Resource);


App.store = store;
App.router = router;

const app = new Vue(App);

sync(store, router);
app.$mount('#app');

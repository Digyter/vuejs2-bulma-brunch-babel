import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  prev_page: '',
  next_page: '',  
  cars: []
};

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters,
  actions
});

// if (module.hot) {
//   module.hot.accept([
//     './getters',
//     './actions',
//     './mutations'
//   ], () => {
//     store.hotUpdate({
//       getters: require('./getters'),
//       actions: require('./actions'),
//       mutations: require('./mutations')
//     });
//   });
// }

export default store;

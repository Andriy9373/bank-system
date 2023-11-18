import { createStore } from 'vuex';
import auth from '@/store/modules/auth';
import message from '@/store/modules/message';
import request from '@/store/modules/request';
import sidebar from '@/store/modules/sidebar';

export default createStore({
  state: {
    language: 'en',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    message,
    request,
    sidebar,
  }
})

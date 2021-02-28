import { createLogger, createStore } from 'vuex';
import auth from './modules/auth.module';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}

export default createStore({
  plugins,
  state() {
    return {
      message: null,
    };
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  actions: {
    setMessage({ commit }, message) {
      commit('setMessage', message);
      setTimeout(() => {
        commit('clearMessage');
      }, 3000);
    },
  },
  modules: {
    auth,
  },
});

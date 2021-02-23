import { createLogger, createStore } from 'vuex';
import auth from './modules/auth.module';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}

export default createStore({
  plugins,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
});

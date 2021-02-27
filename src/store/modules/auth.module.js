import axios from 'axios';

const TOKEN_KEY = 'jwt-token';

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY),
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async login({ commit }, payload) {
      const apiKey = process.env.VUE_APP_API_KEY;
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
      const { data } = await axios.post(url, { ...payload, returnSecureToken: true });
      commit('setToken', data.idToken);
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuth(_, getters) {
      return !!getters.token;
    },
  },
};

import user from '../../api/user';

// initial state
const state = {
  username: null,
  loginError: null,
  registerError: null,
  token: null,
}

// getters
const getters = {
  loggedIn(state) {
    return !!state.token;
  },
  username(state) {
    return state.username;
  },
}

// actions
const actions = {
  login: async ({ commit }, { username, password }) => {
    try {
      const res = await user.login({ username, password })
      commit('setToken', res.data);
    } catch (err) {
      commit('loginFailure');
    }
  },

  register: async ({ commit }, { username, password }) => {
    try {
      const res = await user.register({ username, password })
      commit('setToken', res.data);
    } catch (err) {
      commit('registerError');
    }
  }
}
// mutations
const mutations = {
  setToken(state, data) {
    state.error = false;
    state.token = data.token;
  },

  logout(state) {
    state.token = null;
  },

  loginFailure(state) {
    state.loginError = true;
  },

  registerError(state) {
    state.registerError = true;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

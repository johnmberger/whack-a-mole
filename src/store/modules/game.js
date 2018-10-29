import game from '../../api/game';

// initial state
const state = {
  topFiveScores: [],
  moleSpeed: 1,
  highScoresError: null,
}

// getters
const getters = { }

// actions
const actions = {
  getHighScores: async ({ commit }) => {
    try {
      const res = await game.getHighScores();
      commit('setHighScores', res.data);
    } catch (err) {
      commit('highScoresError');
    }
  },
}
// mutations
const mutations = {
  setHighScores(state, data) {
    state.highScoresError = false;
    state.topFiveScores = data.scores;
  },

  highScoresError(state) {
    state.highScoresError = true;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

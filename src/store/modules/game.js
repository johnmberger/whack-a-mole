import game from '../../api/game';

// initial state
const state = {
  topFiveScores: [],
  highScoresError: null,
  moleSpeed: 1000,
  currentScore: 0,
  clock: 20,
  status: 'stopped',
  activeMole: null,
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
  postNewScore: async ({ commit }, { username, score }) => {
    try {
      commit('changeState', 'loading');
      const res = await game.postNewScore({ username, score });
      commit('setHighScores', res.data);
      commit('resetScore');
      commit('changeState', 'stopped');
    } catch (err) {
      commit('highScoresError');
      commit('changeState', 'stopped');
    }
  },
  incrementScore: ({ commit }) => {
    commit('incrementScore');
  },
  startGame: ({ commit, state }) => {

    commit('resetClock');
    commit('resetScore');
    commit('changeState', 'started');

    // 20 clock ticks
    let i = 0;
    let timer = setInterval(() => {
      if (++i === 20) clearInterval(timer);
      commit('clockTick');
    }, 1000)

    let gameplay = setInterval(() => {
      if (i === 20) {
        clearInterval(gameplay);
        commit('resetMole');
        commit('changeState', 'completed');
      } else {
        commit('resetMole')
        commit('activateMole');
      }
    }, state.moleSpeed);
  },
  resetMole: ({ commit }) => {
    commit('resetMole');
  },
  resetGame: ({ commit }) => {
    commit('resetGame');
  },
  setMoleSpeed: ({ commit }, interval) => {
    commit('setMoleSpeed', interval);
  },
}

// mutations
const mutations = {
  setHighScores(state, data) {
    state.highScoresError = false;
    state.topFiveScores = data.scores;
  },

  activateMole(state) {
    const randomMole = Math.floor(Math.random() * 8); // 9 moles, 0-indexed
    state.activeMole = randomMole;
  },

  resetMole(state) {
    state.activeMole = null;
  },

  setMoleSpeed(state, timeout) {
    state.moleSpeed = timeout;
  },

  highScoresError(state) {
    state.highScoresError = true;
  },

  incrementScore(state) {
    state.currentScore++;
  },

  resetScore(state) {
    state.currentScore = 0;
  },

  resetClock(state) {
    state.clock = 20;
  },

  resetGame(state) {
    state.currentScore = 0;
    state.clock = 20;
    state.activeMole = null;
    state.status = 'stopped';
  },

  changeState(state, status) {
    state.status = status;
  },

  clockTick(state) {
    if (state.clock > 1) {
      state.clock--;
    } else {
      state.clock--;
      state.status = 'stopped';
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

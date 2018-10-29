import Vue from 'vue';
import Vuex from 'vuex';
import game from './modules/game';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    game,
    user
  },
  strict: debug,
})

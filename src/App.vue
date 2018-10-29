<template>
  <div id="app">
    <LoginOrRegister v-if="!loggedIn"/>
    <Game v-if="loggedIn"/>
    <HighScores v-if="loggedIn"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Game from './components/Game.vue';
import HighScores from './components/HighScores';
import LoginOrRegister from './components/Login';

export default {
  name: 'app',
  components: {
    Game,
    HighScores,
    LoginOrRegister,
  },
  computed: {
    ...mapState({
      token: state => state.token,
    }),
    ...mapGetters({
      loggedIn: 'game/loggedIn',
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

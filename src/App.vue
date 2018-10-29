<template>
  <div id="app">
    <h1>Whack-a-mole</h1>
    <div class="content">
      <LoginOrRegister v-if="!loggedIn"/>
      <div class="user" v-if="loggedIn">
        <h3 class="hello">Hi, {{ username }}!</h3>
        <button class="hello" v-on:click="logout">Logout</button>
      </div>
      <Game v-if="loggedIn"/>
      <HighScores v-if="loggedIn"/>
    </div>
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
      username: state => state.user.username,
    }),
    ...mapGetters({
      loggedIn: 'user/loggedIn',
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  padding-top: 60px;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  background: url('assets/bg.png');
}
body {
  margin: 0px;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.user {
  width: 300px;
}
h1 {
  font-size: 36px;
  margin-top: 0px;
  margin-bottom: 40px;
  color: darkgreen;
}
h3 {
  color: darkgreen;
}
button.hello {
  color: grey;
  border: none;
}
.hello {
  margin-bottom: 0px;
}
button {
  cursor: pointer;
  font-size: 1rem;
  background-color: transparent;
  border: 2px solid darkgreen;
  border-radius: 2px;
  color: darkgreen;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 1.5rem;
}
button:hover {
  background-color: gainsboro;
}
</style>

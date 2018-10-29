<template>
  <div class="hello">
    <div class="login">
      Login
      <label for="username">Username</label>
      <input type="text" name="username" v-model="loginUsername">
      <label for="password">Password</label>
      <input type="text" v-model="loginPassword" name="password">
      <button type="button" v-on:click="login">Submit</button>
      {{JSON.stringify(loginError)}}
      <div class="error" v-if="loginError">
        login error!
      </div>
    </div>
    <div class="register">
      Register
      <label for="username">Username</label>
      <input type="text" name="username" v-model="registerUsername">
      <label for="password">Password</label>
      <input type="text" v-model="registerPassword" name="password">
      <button type="button" v-on:click="register">Submit</button>
      <div class="error" v-if="registerError">
        register error!
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoginOrRegister',
  data() {
    return {
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: '',
    }
  },
  computed: {
    ...mapState({
      loginError: state => state.user.loginError,
      registerError: state => state.user.registerError,
    }),
  },
  methods: {
    login() {
      this.$store.dispatch('game/login', { username: this.loginUsername, password: this.loginPassword })
    },
    register() {
      this.$store.dispatch('game/register', { username: this.registerUsername, password: this.registerPassword })
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

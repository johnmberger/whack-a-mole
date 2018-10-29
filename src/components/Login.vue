<template>
  <div class="hello">
    <div class="login" v-if="showLogin">
      <h3>Login</h3>
      <p>
        Don't have an account? <a v-on:click="toggleLoginAndRegister(false, true)">Sign Up</a>
      </p>
      <div class="form-field">
        <div class="field-set">
          <label for="username">Username</label>
          <br>
          <input type="text" name="username" v-model="loginUsername">
        </div>
        <div class="field-set">
          <label for="password">Password</label>
          <br>
          <input type="password" v-model="loginPassword" name="password">
        </div>
      </div>
      <button type="button" v-on:click="login">Login</button>
      <div class="error" v-if="loginError">
        Username or password is incorrect.
      </div>
    </div>
    <div class="login" v-if="showRegister">
      <h3>Register</h3>
      <p>Already have an account? <a v-on:click="toggleLoginAndRegister(true, false)">Sign In</a></p>
      <div class="form-field">
        <div class="field-set">
          <label for="username">Username</label>
          <br>
          <input type="text" name="username" v-model="registerUsername">
        </div>
        <div class="field-set">
          <label for="password">Password</label>
          <br>
          <input type="password" v-model="registerPassword" name="password">
        </div>
      </div>
      <button type="button" v-on:click="register">Register</button>
      <div class="error" v-if="registerError">
        Something went wrong. Please try again.
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
      showLogin: true,
      showRegister: false,
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
    toggleLoginAndRegister(login, register) {
      this.showLogin = login;
      this.showRegister = register;
    },
    login() {
      this.$store.dispatch('user/login', { username: this.loginUsername, password: this.loginPassword })
    },
    register() {
      this.$store.dispatch('user/register', { username: this.registerUsername, password: this.registerPassword })
    }
  }
}
</script>

<style scoped>
.hello {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login {
  background-color: white;
  width: 500px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  padding-bottom: 40px;
}
.error {
  margin-top: 12px;
  color: red;
}
.form-field {
  margin: 0px auto;
  width: 200px;
  text-align: left;
}
a {
  color: darkgreen;
  cursor: pointer;
}
label {
  width: 100%;
  font-size: 12px;
}
input {
  width: 100%;
}
</style>

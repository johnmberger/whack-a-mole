<template>
  <div class="container">
    <div class="game">
      <button class="btn" v-on:click="startGame" v-if="status === 'stopped'">Start Game</button>
      <div class="info" v-if="status === 'started'">
        <span class="game-info">Time Left: {{ clock }}</span>
        <span class="game-info">Score: {{ currentScore }}</span>
      </div>
      <div class="score" v-if="status === 'completed'">
        <div class="score-num">
          You Scored: {{ currentScore }}
        </div>
        <div class="buttons">
          <button class="btn" v-on:click="sendNewScore">Save Score</button>
          <button class="btn" v-on:click="reset">Discard Score</button>
        </div>
      </div>
      <div class="board" v-if="status !== 'loading'">
        <div
          class="hole"
          v-for="n, index in 9"
          :id="index"
        >
          <div
            v-if="index === activeMole"
            class="mole"
            v-on:click="onClick(index)"
          >
            <img src="<%= BASE_URL %>mole.svg" class="img" onmousedown="return false" />
          </div>
        </div>
      </div>
      <div class="slider" v-if="status !== 'started'">
        <span class="label">faster moles</span>
        <input type="range" min="500" max="1500" step="500" :value="moleSpeed" v-on:change="changeHandler" class="slider">
        <span class="label">slower moles</span>
      </div>
      <div class="loader" v-if="status === 'loading'">
        loading...
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Game',
  computed: {
    ...mapState({
      activeMole: state => state.game.activeMole,
      moleSpeed: state => state.game.moleSpeed,
      currentScore: state => state.game.currentScore,
      clock: state => state.game.clock,
      status: state => state.game.status,
      username: state => state.user.username,
    }),
  },
  methods: {
    startGame() {
      this.$store.dispatch('game/startGame');
    },
    onClick(index) {
      this.$store.dispatch('game/resetMole');
      this.$store.dispatch('game/incrementScore');
    },
    sendNewScore() {
      this.$store.dispatch('game/postNewScore', { username: this.username, score: this.currentScore });
    },
    changeHandler(evt) {
      this.$store.dispatch('game/setMoleSpeed', evt.target.value);
    },
    reset() {
      this.$store.dispatch('game/resetGame');
    }
  },
}
</script>

<style scoped>
.slider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
}
.label {
  margin: 0px 5px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.board {
  background: transparent;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: url('../assets/mallet.png'), auto;
}
.hole {
  width: 30%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-top: 1.5%;
  height: 30%;
  background-color: lightgrey;
  border-radius: 50%;
}
.mole {
  width: 100%;
  height: 80%;
  border-radius: 50%;
}
.img {
  user-select: none;
  margin-top: 20%;
  height: 80%;
}
.btn {
  margin-top: 10px;
  margin-bottom: 20px;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.score {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
.game-info {
  font-weight: bold;
  font-size: 24px;
}
.save-button {
  margin-top: 0px;
}
</style>

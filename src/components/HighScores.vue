<template>
  <div class="scores">
    <h3>Leaderboard</h3>
    <table v-if="scores.length && !error">
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
      <tr
        v-for="score in scores"
      >
        <td>{{ score.username }}</td>
        <td>{{ score.score }}</td>
      </tr>
    </table>
    <div class="error" v-if="error">
      Soemthing went wrong loading the high scores.
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HighScores',
  computed: {
    ...mapState({
      scores: state => state.game.topFiveScores,
      error: state => state.game.highScoresError,
    }),
  },
  methods: {
    sendScore() {
      this.$store.dispatch('game/postNewScore', { username, currentScore });
    },
  },
  async mounted() {
    this.$store.dispatch('game/getHighScores');
  },
}
</script>

<style scoped>
.scores {
  width: 300px;
}
th, td {
  padding-left: 10px;
  padding-right: 10px;
}
table {
  margin: 0px auto;
}
.error {
  color: red;
}
</style>

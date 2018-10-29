<template>
  <div class="scores">
    {{JSON.stringif(scores)}}
  </div>
</template>

<script>
export default {
  name: 'HighScores',
  computed: {
    ...mapState({
      scores: state => state.game.topFiveScores,
      error: state => state.game.highScoresError,
    }),
  },
  methods: {
    getScores() {
      this.$store.dispatch('game/getHighScores');
    },
  }
}
</script>

<style scoped>

</style>

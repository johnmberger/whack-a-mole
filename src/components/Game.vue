<template>
  <div class="board">
    board!
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Game',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      moleSpeed: state => state.moleSpeed,
    }),
  },
}
</script>

<style scoped>
.circle {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  /* width and height can be anything, as long as they&rsquo;re equal */
}
</style>

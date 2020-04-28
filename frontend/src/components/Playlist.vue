<template>
  <ul class="playlist">
    <c-track v-for="track in tracks" :key="track.id" :track="track" />
  </ul>
</template>

<script>
import CTrack from './Track.vue';

export default {
  name: 'Playlist',

  components: {
    CTrack,
  },

  props: {
    tracks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.playlist
  margin 0
  padding 0
</style>

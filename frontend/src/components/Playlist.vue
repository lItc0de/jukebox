<template>
  <ul class="playlist">
    <h1>{{ playlist.name }}</h1>
  </ul>
</template>

<script>
export default {
  name: 'Playlist',

  props: {
    playlist: {
      type: Object,
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

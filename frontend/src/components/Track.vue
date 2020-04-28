<template>
  <li class="track">
    <span class="playing">{{ track.playing }}</span>
    <span class="liked">{{ track.liked }}</span>
    <span class="name">{{ track.name }}</span>
    <router-link to="/aritsts/1">
      <span class="artist">{{ track.artist }}</span>
    </router-link>
    <router-link to="/albums/1">
      <span class="album">{{ track.album }}</span>
    </router-link>
    <span class="added">{{ track.added }}</span>
    <span class="duration">{{ track.duration }}</span>
  </li>
</template>

<script>
export default {
  name: 'Track',

  props: {
    track: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.track
  list-style none
  border-bottom 1px solid var(--borderColor)
  display flex
  justify-content space-evenly
  padding .25rem
</style>

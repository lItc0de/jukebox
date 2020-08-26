<template>
  <li class="playlist">
    <span class="image">
      <img :src="playlist.images[0].url" :alt="playlist.name" />
    </span>
    <span class="name">{{ playlist.name }}</span>
    <span>{{ playlist.owner.displayName }}</span>
    <span>{{ playlist.tracks.total }}</span>
  </li>
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
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  border-top 1px solid var(--borderColor)

  > span
    flex 1
    padding 0 .5rem

  > .name
    flex 3

  > .image
    line-height 0
    padding 0
    > img
      height 4rem
</style>

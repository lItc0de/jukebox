<template>
  <div class="home-page">
    <ApolloQuery
      :query="require('./graphql/Playlists.gql')"
      :variables="{ first: 50, cursor: '' }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">Loading</div>
        <ul v-else-if="data" class="playlists">
          <li class="playlists-header">
            <span />
            <span class="name">Name</span>
            <span>Owner</span>
            <span>Tracks</span>
          </li>
          <c-playlist
            v-for="edge in data.playlists.edges"
            :playlist="edge.node"
            :key="edge.node.id"
          />
        </ul>
        <div v-else-if="error">{{ error.message }}</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import CPlaylist from '@/components/Playlist.vue';

export default {
  name: 'HomePage',

  components: {
    CPlaylist,
  },
};
</script>

<style lang="stylus" scoped>
.home-page
  padding 1rem
  max-width 700px

.playlists
  margin 0
  padding 0

  > .playlists-header
    display flex
    flex-direction row
    justify-content space-between

    > span
      flex 1

    > .name
      flex 3
</style>

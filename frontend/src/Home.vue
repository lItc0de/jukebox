<template>
  <div>
    <ApolloQuery
      :query="require('./graphql/Playlists.gql')"
      :variables="{ first: 50, cursor: '' }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">Loading</div>
        <c-playlist
          v-else-if="data"
          v-for="edge in data.playlists.edges"
          :playlist="edge.node"
          :key="edge.node.id"
        />
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
